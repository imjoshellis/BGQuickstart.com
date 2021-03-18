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

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 })
    ]
  })
)
