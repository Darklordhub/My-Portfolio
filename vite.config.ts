import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const pageEntries = {
  home: resolve(import.meta.dirname, 'index.html'),
  experience: resolve(import.meta.dirname, 'experience/index.html'),
  contact: resolve(import.meta.dirname, 'contact/index.html'),
};

export default defineConfig({
  appType: 'mpa',
  base: '/My-Portfolio/',
  build: {
    rollupOptions: {
      input: pageEntries,
    },
  },
});
