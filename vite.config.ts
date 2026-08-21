import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const pageEntries = {
  home: resolve(import.meta.dirname, 'index.html'),
  governance: resolve(import.meta.dirname, 'governance/index.html'),
  experience: resolve(import.meta.dirname, 'experience/index.html'),
  caseStudies: resolve(import.meta.dirname, 'case-studies/index.html'),
  technical: resolve(import.meta.dirname, 'technical/index.html'),
  credentials: resolve(import.meta.dirname, 'credentials/index.html'),
  contact: resolve(import.meta.dirname, 'contact/index.html'),
};

export default defineConfig({
  base: '/My-Portfolio/',
  build: {
    rollupOptions: {
      input: pageEntries,
    },
  },
});

