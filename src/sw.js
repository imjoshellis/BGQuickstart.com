importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js'
)

workbox.loadModule('workbox-precaching')
workbox.loadModule('workbox-routing')
workbox.loadModule('workbox-strategies')
workbox.loadModule('workbox-expiration')

const { precacheAndRoute } = workbox.precaching
const { registerRoute } = workbox.routing
const { StaleWhileRevalidate } = workbox.strategies
const { ExpirationPlugin } = workbox.expiration

precacheAndRoute(self.__WB_MANIFEST)
