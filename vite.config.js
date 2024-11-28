import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Замените на название своего репозитория
  base: '/hotel-community/',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        catalog: path.resolve(__dirname, 'src/pages/catalog.html'),
      }
    }
  },
  server: {
    host: 'localhost',
    port: 3000,
    open: true
  }
});
