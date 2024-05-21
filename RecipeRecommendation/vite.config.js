/* eslint-disable linebreak-style */
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Here you can add your aliases for absolute imports
      '@': '/src',
      'assets': '/src/Assets',
      // Add more aliases as needed for your project structure
    },
  },
});
