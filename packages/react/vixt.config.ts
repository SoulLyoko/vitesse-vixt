import { defineVixtConfig } from '@vixt/core'

export default defineVixtConfig({
  extends: ['@vv/shared'],
  app: {
    css: ['@/styles/main.css'],
  },
  typescript: {
    typeCheck: { typescript: true },
  },
})
