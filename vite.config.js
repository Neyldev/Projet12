import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    base: '/Projet12/',
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
