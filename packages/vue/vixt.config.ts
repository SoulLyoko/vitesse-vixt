import { defineVixtConfig } from 'vixt'

export default defineVixtConfig({
  extends: ['@vv/shared'],
  app: {
    css: ['@/styles/main.css'],
  },
  typescript: {
    typeCheck: { vueTsc: true },
  },
})
