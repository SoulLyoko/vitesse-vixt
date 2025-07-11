<template>
  <nav flex="~ gap-4" mt-6 justify-center text-xl>
    <navigator icon-btn url="/" title="Home">
      <div i-carbon-campsite />
    </navigator>

    <a icon-btn title="toggleDark" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </a>

    <navigator icon-btn url="/about" title="About" data-test-id="about">
      <div i-carbon-dicom-overlay />
    </navigator>

    <a icon-btn rel="noreferrer" :href="REPO_URL" title="GitHub" target="_blank">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
