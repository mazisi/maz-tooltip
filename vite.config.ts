import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ToolTip',
      fileName: (format) => `ToolTip.${format}.js`
    }
  },
  rollupOptions: {
    external: ['vue', 'tippy.js'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
