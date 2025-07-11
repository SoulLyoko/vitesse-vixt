import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { name } from '../../package.json'

export default defineConfig({
  plugins: [Unocss()],
  base: `/${name}/`,
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
  },
})
