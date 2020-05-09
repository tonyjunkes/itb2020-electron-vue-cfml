import {
  app, BrowserWindow, nativeTheme, ipcMain, dialog
} from 'electron';

const box = require('commandboxjs');
const path = require('path');
const mkdirp = require('mkdirp');

// Global vars for API
global.application = {
  api: {
    uri: 'http://localhost:8888/'
  },
  paths: {
    docs: `${app.getPath('documents')}/intothebox`
  }
};

const cfmlPath = (process.env.PROD)
  ? path.join(process.resourcesPath, 'cfml')
  : path.join(__dirname, '../..', 'cfml');

try {
  if (process.platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(path.join(app.getPath('userData'), 'DevTools Extensions'));
  }
} catch (_) { }

/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
  global.__statics = path.join(__dirname, 'statics').replace(/\\/g, '\\\\');
}

let mainWindow;

function startCommandBox() {
  box.start(cfmlPath);
}

function stopCommandBox() {
  box.stop(cfmlPath);
}

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    useContentSize: true,
    webPreferences: {
      webSecurity: false,
      // Change from /quasar.conf.js > electron > nodeIntegration;
      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: QUASAR_NODE_INTEGRATION
      // More info: /quasar-cli/developing-electron-apps/electron-preload-script
      // preload: path.resolve(__dirname, 'electron-preload.js')
    }
  });

  mainWindow.loadURL(process.env.APP_URL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('close', () => {
    stopCommandBox();
  });
}

app.once('ready', () => {
  mkdirp(global.application.paths.docs, (err) => {
    if (err) throw err;
  });
});

app.on('ready', () => {
  startCommandBox();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('before-quit', () => {
  stopCommandBox();
});

// Dialog for the general alerts
ipcMain.on('show-alert', (event, args) => {
  dialog.showMessageBox(null, args, () => {
    event.sender.send('show-alert');
  });
});
