importScripts('/ca-se-regarde/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/ca-se-regarde/_nuxt/0361fb8eea682821a5be.js",
    "revision": "a5acb0787a272ee3fa39a361ccf08fd6"
  },
  {
    "url": "/ca-se-regarde/_nuxt/54f629e1e1e07193e1c4.js",
    "revision": "969675978931925a6e5c19a24691e8d5"
  },
  {
    "url": "/ca-se-regarde/_nuxt/8c71a275ccaf652394a3.js",
    "revision": "4ab3102b5b4e2c2da36876ab962302a6"
  },
  {
    "url": "/ca-se-regarde/_nuxt/aef7ff7d207a03409739.js",
    "revision": "ed7db5d67cb321a415a830d9c5e0c6d1"
  },
  {
    "url": "/ca-se-regarde/_nuxt/ea56a8cfe30698ca4d9a.js",
    "revision": "49502338f2bf9ec33747d099221f8f14"
  },
  {
    "url": "/ca-se-regarde/_nuxt/ed2d0f95d8559cfa18c1.js",
    "revision": "4d43a5cfbb3352beb26ba30bb9a07d5b"
  }
], {
  "cacheId": "ca-se-regarde",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/ca-se-regarde/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/ca-se-regarde/.*'), workbox.strategies.networkFirst({}), 'GET')
