import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  /*server: {
    hmr: {
      overlay: false, // Optional: Disable the overlay for build errors
    },
  },*/
});

