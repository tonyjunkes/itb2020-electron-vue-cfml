
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/cosume-example', component: () => import('pages/Consume.vue') },
      { path: '/folder-example', component: () => import('pages/Folder.vue') },
      { path: '/dialog-example', component: () => import('pages/Dialog.vue') }
    ],
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
