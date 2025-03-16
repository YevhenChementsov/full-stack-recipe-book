import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === 'production' ? '/full-stack-recipe-book/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/recipes': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@api': resolve(__dirname, './src/api'),
    },
  },
});
