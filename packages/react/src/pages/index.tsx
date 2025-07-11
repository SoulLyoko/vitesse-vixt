/*
route

meta:
  layout: home
  title: Home
*/

function index() {
  const { savedName } = useUserStore()
  const [name, setName] = useState(savedName)
  const navigate = useNavigate()
  const go = () => name && navigate(`/hi/${encodeURIComponent(name)}`)
  const { VITE_APP_TITLE } = import.meta.env
  return (
    <div>
      <div i-carbon-campsite text-4xl inline-block />
      <p>
        <a href={BASE_URL}>
          {VITE_APP_TITLE}
        </a>
      </p>
      <p>
        <em text-sm op-75>Opinionated Vixt Starter Template (React)</em>
      </p>

      <div py-4 />

      <TheInput
        value={name}
        placeholder="What's your name?"
        autoComplete="false"
        onChange={e => setName(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && go()}
      />

      <div>
        <button className="m-3 text-sm btn" disabled={!name} onClick={() => go()}>
          Go
        </button>
      </div>
    </div>
  )
}

export default index
