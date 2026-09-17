import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    lib: {
      entry: 'src/main.ts',
      name: 'DhikrApp',
      formats: ['es'],
      fileName: () => 'app.js'
    },
    rollupOptions: {
      output: {
        entryFileNames: 'app.js'
      }
    },
    target: 'es2022'
  }
});
