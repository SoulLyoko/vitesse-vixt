import { BASE_URL } from '@vv/shared/src/constants/base'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [Unocss()],
  base: BASE_URL,
  build: {
    outDir: '../../dist',
  },
})
