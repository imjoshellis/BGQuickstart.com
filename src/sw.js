importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js'
)

workbox.loadModule('workbox-precaching')

const { precacheAndRoute } = workbox.precaching
precacheAndRoute(self.__WB_MANIFEST)
