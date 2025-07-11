/*
route

meta:
  title: About
*/

function about() {
  return (
    <div max-w-xl m-auto text-center>
      <div i-carbon-dicom-overlay text-4xl inline-block />
      <div font-bold text-xl m-2>
        About
      </div>
      <p>
        <a underline href={REPO_URL} target="_blank" rel="noreferrer">Vitesse Vixt</a>
        <span> is an opinionated </span>
        <a underline href="https://github.com/SoulLyoko/vixt" target="_blank" rel="noreferrer">Vixt</a>
        <span> starter template made by </span>
        <a underline href="https://github.com/SoulLyoko" target="_blank" rel="noreferrer">SoulLyoko</a>
        <span> for mocking apps swiftly. With </span>
        <strong>file-based routing, components auto importing</strong>
        <span> and uses </span>
        <strong>UnoCSS</strong>
        <span> for styling and icons.</span>
      </p>
      <p mt-4>
        <span>Check out the </span>
        <a underline href={REPO_URL} target="_blank" rel="noreferrer">GitHub repo</a>
        <span> for more details.</span>
      </p>
    </div>
  )
}

export default about
