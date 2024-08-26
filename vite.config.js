import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/BumbleBeeHR/',
  plugins: [react()],
  server: {
    port: 3000
  }
})
