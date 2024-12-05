import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Use this if you're using React
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // This sets `@` to refer to the `src` folder
    },
  },
});
