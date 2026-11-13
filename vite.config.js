import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  // Su GitHub Pages il sito vive in /proj-html-vuejs/; in sviluppo resta alla radice
  base: command === 'build' ? '/proj-html-vuejs/' : '/',
}))
