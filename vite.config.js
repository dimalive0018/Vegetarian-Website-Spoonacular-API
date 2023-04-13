import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'

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
