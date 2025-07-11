import { Link } from 'react-router'

export default function TheFooter() {
  const [_isDark, toggleDark] = useDark()
  return (
    <nav flex gap-4 justify-center mt-6 text-xl>
      <Link icon-btn to="/" title="Home">
        <div i-carbon-campsite />
      </Link>

      <button icon-btn title="ToggleDark" onClick={() => toggleDark()}>
        <div i-carbon-sun dark-i-carbon-moon />
      </button>

      <Link icon-btn to="/about" title="About">
        <div i-carbon-dicom-overlay />
      </Link>

      <a icon-btn rel="noreferrer" href={REPO_URL} target="_blank" title="GitHub">
        <div i-carbon-logo-github />
      </a>
    </nav>
  )
}
