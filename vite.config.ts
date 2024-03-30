import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3400,
  },
  preview: {
    port: 8200,
  },
  build: {
    outDir: resolve(__dirname, './dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        '': resolve(__dirname, './src/main.tsx'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name?.split('.').at(1) || 'unknown';
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
});
