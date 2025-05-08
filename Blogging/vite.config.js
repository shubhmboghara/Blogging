import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'copy-redirects',
      closeBundle() {
        // Ensure _redirects is copied to dist
        const publicRedirects = resolve(__dirname, 'public', '_redirects')
        const distRedirects = resolve(__dirname, 'dist', '_redirects')
        if (fs.existsSync(publicRedirects)) {
          fs.copyFileSync(publicRedirects, distRedirects)
          console.log('✓ _redirects file copied to dist')
        }
      }
    }
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Split any other large dependencies into separate chunks
          utils: ['@reduxjs/toolkit', 'react-redux']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase warning limit to 1000kb if needed
  }
})
  