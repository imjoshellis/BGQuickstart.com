import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA({
      manifest: {
        background_color: '#1A202C',
        description: 'The fastest way to choose a start player.',
        display: 'standalone',
        icons: [
          {
            sizes: '1024x1024',
            src: 'favicon.png',
            type: 'image/x-icon'
          },
          {
            sizes: '192x192',
            src: 'logo192.png',
            type: 'image/png'
          },
          {
            purpose: 'any maskable',
            sizes: '512x512',
            src: 'logo512.png',
            type: 'image/png'
          }
        ],
        name: 'BG Quickstart',
        short_name: 'bgqs',
        start_url: '/',
        theme_color: '#1A202C'
      }
    })
  ]
})
