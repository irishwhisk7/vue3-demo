import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import viteComponents from 'unplugin-vue-components/vite'
import windiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3003,
    proxy: {
      '/api': {
        target: 'http:localhost:7001',
      }
    },
  },
  plugins: [
    vue(),
    pages(),
    layouts(),
    vueI18n({
      compositionOnly: false,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
    viteComponents(),
    windiCSS(),
  ]
})
