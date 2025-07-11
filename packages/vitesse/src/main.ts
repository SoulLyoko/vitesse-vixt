// @unocss-include
import { BASE_URL } from '@vv/shared/src/constants/base'
import { REPO_URL } from '@vv/shared/src/constants/repo'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './main.css'

globalThis.toggleDark = function () {
  const isDark = document.documentElement.classList.contains('dark')
  document.documentElement.classList.toggle('dark', !isDark)
  localStorage.setItem('color-scheme', isDark ? 'light' : 'dark')
}

const nav = `<nav absolute right-4 top-4 flex gap-4>
  <button class="icon-btn" title="toggleDark" onclick="toggleDark()">
    <div class="i-carbon-sun dark-i-carbon-moon"></div>
  </button>
  <a class="icon-btn" href="${REPO_URL}" rel="noreferrer" title="GitHub" target="_blank">
    <div class="i-carbon-logo-github"></div>
  </a>
</nav>`

const box = ['vue', 'react', 'uni'].map((name) => {
  return `<a class="box" href="${name}">
  <img class="icon" src="${BASE_URL + name}.svg" alt="${name}" />
  <div class="title">Vitesse Vixt</div>
  <div class="details">${name}</div>
</a>`
}).join('\n')

const features = `<div flex gap-4 justify-center items-center h-full flex-col md-flex-row>
  ${box}
</div>`

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `${nav}${features}`
