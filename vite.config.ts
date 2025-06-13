import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    cors: false, // Temporary mitigation for esbuild advisory GHSA-67mh-4wv8-2f99
  },
});


// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

