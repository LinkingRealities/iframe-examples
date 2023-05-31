import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vue from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from "url";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
