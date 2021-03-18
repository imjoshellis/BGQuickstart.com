importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js'
)

const { precacheAndRoute } = workbox.precaching
const { registerRoute } = workbox.routing
const { StaleWhileRevalidate } = workbox.strategies
const { ExpirationPlugin } = workbox.expiration

precacheAndRoute(self.__WB_MANIFEST)

console.log('sw is running')
