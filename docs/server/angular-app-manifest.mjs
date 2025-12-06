
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
    'index.csr.html': {size: 651, hash: '50db163c0535d1e2bed6c355575013573d248b8b7521306bb97ec5e4a510f5a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: 'bf7b3a82e592e593ff414f56a5eee944f763b6825277f830aaf1c78d5d3f2574', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 2744, hash: '3a4d8a201e1fa5379d1b41babfe2b1c474c907b46f132ccf94e7e7f3f011a1ea', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 2752, hash: 'ed653f2dc6c3607d17cb1b656de46193aedba9dbdc86ec3539de8c88dfa05236', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 2736, hash: 'eb081ab8b33eb9bf52dc6093db39629f23aebb31c44092530d0ed5bf6abd32b8', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3189, hash: '92734dfcfd27fde3f4687d392539ddb79254749f781a64e17d4d951cfff3f3af', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SJASMUUX.css': {size: 93, hash: 'rb7s3/mpGkk', text: () => import('./assets-chunks/styles-SJASMUUX_css.mjs').then(m => m.default)}
  },
};
