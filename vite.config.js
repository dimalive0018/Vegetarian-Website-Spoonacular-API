import { defineConfig, loadEnv } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/main.js',
    },
  },
  envDir: '.',
  define: {
    'process.env': loadEnv(process.env.NODE_ENV, process.cwd()),
  },
});