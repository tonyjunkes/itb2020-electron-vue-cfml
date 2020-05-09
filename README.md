# Into the Box 2020 Session: Build A Desktop Application Powered By Electron, VueJS &amp; CFML
---

#### https://slides.com/tonyjunkes/deck

As a web developer, building desktop applications might not have ever been a thought a few years ago. Learn how modern tooling allows you to build a fully functional desktop app using what you're probably already familiar with: HTML, CSS, JavaScript and a server-side language of your choosing.

## Quasar App (intothebox)
---

A Quasar Framework app

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev -m electron
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build -m electron
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

## Notes

- This example application was setup to run on Windows but should run on MacOS and Linux.
- When the application starts, it will create an /intothebox directory in the OS equivalent of `Documents` directory for the "open folder" example.

## ColdBox REST HMVC Template On Lucee
---

The Lucee server instance will launch from CommandBox when the Electron app starts. You can access it from 127.0.0.1:8888.