<template>
  <div max-w-xl m-auto text-center>
    <div text-4xl inline-block i-carbon-dicom-overlay />
    <div font-bold text-xl m-2>
      About
    </div>
    <p>
      <a underline :href="REPO_URL" target="_blank" rel="noreferrer">Vitesse Vixt</a>
      is an opinionated
      <a underline href="https://github.com/SoulLyoko/vixt" target="_blank" rel="noreferrer">Vixt</a>
      starter template made by
      <a underline href="https://github.com/SoulLyoko" target="_blank" rel="noreferrer">SoulLyoko</a>
      for mocking apps swiftly. With
      <strong>file-based routing, components auto importing</strong> and uses <strong>UnoCSS</strong>
      for styling and icons.
    </p>
    <p mt-4>
      Check out the <a underline :href="REPO_URL" target="_blank" rel="noreferrer">GitHub repo</a> for more details.
    </p>
  </div>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: About
</route>
