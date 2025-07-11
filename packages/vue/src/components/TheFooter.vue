<template>
  <nav flex="~ gap-4" mt-6 text-xl justify-center>
    <RouterLink icon-btn to="/" title="Home">
      <div i-carbon-campsite />
    </RouterLink>

    <button icon-btn title="toggleDark" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <RouterLink icon-btn to="/about" title="About" data-test-id="about">
      <div i-carbon-dicom-overlay />
    </RouterLink>

    <a icon-btn rel="noreferrer" :href="REPO_URL" title="GitHub" target="_blank">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
