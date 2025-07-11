import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'
import { loadEnv } from 'vixt'

const { VITE_APP_TITLE } = loadEnv()

export default defineUniPages({
  pages: [],
  easycom: {
    autoscan: true,
  },
  globalStyle: {
    navigationBarTitleText: VITE_APP_TITLE,
    navigationStyle: 'custom',
  },
})
