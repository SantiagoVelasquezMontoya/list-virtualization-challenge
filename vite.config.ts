import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/list-virtualization-challenge/',
  plugins: [react()],
  test: {
    globals: true,

    environment: 'jsdom',

    setupFiles: './setupTests.ts',
  },
});
