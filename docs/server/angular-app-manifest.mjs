
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/motos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/motos"
  },
  {
    "renderMode": 2,
    "route": "/motos/nosotros"
  },
  {
    "renderMode": 2,
    "route": "/motos/productos"
  },
  {
    "renderMode": 2,
    "route": "/motos/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/motos",
    "route": "/motos/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 651, hash: '94bd21e5988d1bcabd2106e101229eaaeaee4d8ca909dd7a01176972f8fdf593', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: '0dbff51438f07b8a8574eb5d6500e4542f4df842dd5c3068fc69baf30d557e4b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'styles-SJASMUUX.css': {size: 93, hash: 'rb7s3/mpGkk', text: () => import('./assets-chunks/styles-SJASMUUX_css.mjs').then(m => m.default)}
  },
};
