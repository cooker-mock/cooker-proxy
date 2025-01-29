import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'popup'), // build popup only
  base: './',
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'popup/dist'),
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'popup/index.html'), // entry
    },
    watch: {},
  },
});
