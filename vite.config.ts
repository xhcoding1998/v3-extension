import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import  { viteStaticCopy }  from  'vite-plugin-static-copy'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy ( {
      targets : [
        {
          src : 'src/plugins/manifest.json' ,
          dest : ''
        },
        {
          src : 'src/assets' ,
          dest : ''
        },
      ]
    } )
  ],
  build: {
    watch: {
      exclude: 'node_modules/**',
      include: 'src/**'
    },
    rollupOptions: {
      input: {
        'main': 'index.html',
        'inject': 'src/plugins/inject.ts',
      },
      output: {
        dir: 'dist',
        entryFileNames: '[name].js'
      },
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
