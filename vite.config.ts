import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from '@bangjelkoski/vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills({ protocolImports: true })],
});
