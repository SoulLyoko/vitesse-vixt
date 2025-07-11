import { defineVixtConfig, loadEnv } from 'vixt'

const { VITE_APP_TITLE } = loadEnv()

const perfersDarkScript = `;(function () {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
  if (setting === 'dark' || (prefersDark && setting !== 'light'))
    document.documentElement.classList.toggle('dark', true)
})()`

export default defineVixtConfig({
  meta: {
    name: 'shared',
  },
  app: {
    head: {
      title: [{ children: VITE_APP_TITLE }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      script: [{ children: perfersDarkScript }],
    },
    css: [
      '@unocss/reset/tailwind.css',
    ],
  },
})
