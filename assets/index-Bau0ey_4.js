(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c="vitesse-vixt",l=`/${c}/`,a="https://github.com/SoulLyoko/vitesse-vixt";globalThis.toggleDark=function(){const o=document.documentElement.classList.contains("dark");document.documentElement.classList.toggle("dark",!o),localStorage.setItem("color-scheme",o?"light":"dark")};const u=`<nav absolute right-4 top-4 flex gap-4>
  <button class="icon-btn" title="toggleDark" onclick="toggleDark()">
    <div class="i-carbon-sun dark-i-carbon-moon"></div>
  </button>
  <a class="icon-btn" href="${a}" rel="noreferrer" title="GitHub" target="_blank">
    <div class="i-carbon-logo-github"></div>
  </a>
</nav>`,d=["vue","react","uni"].map(o=>`<a class="box" href="${o}">
  <img class="icon" src="${l+o}.svg" alt="${o}" />
  <div class="title">Vitesse Vixt</div>
  <div class="details">${o}</div>
</a>`).join(`
`),f=`<div flex gap-4 justify-center items-center h-full flex-col md-flex-row>
  ${d}
</div>`,g=document.querySelector("#app");g.innerHTML=`${u}${f}`;
