import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ReactRefresh from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ReactRefresh(),
  ],
})
