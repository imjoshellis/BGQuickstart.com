import './Index.bs'
import './css/styles.css'
import './css/index.css'

// Set up SW
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}
