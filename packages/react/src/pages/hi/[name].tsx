import { useTitle } from '@reactuses/core'
import { Link } from 'react-router'

function hi() {
  const navigate = useNavigate()
  const { savedName, otherNames, setNewName } = useUserStore()
  const params = useParams()
  useTitle(`Hi, ${params.name}!`)
  useEffect(() => setNewName(params.name!), [params.name])

  return (
    <div>
      <div i-carbon-pedestrian text-4xl inline-block />
      <p>
        Hi,
        {' '}
        {savedName}
      </p>

      <div text-sm op-75>
        Dynamic route!
      </div>

      {
        otherNames().length
          ? (
              <div mt-4 text-sm>
                <span op-75>Aka:</span>
                <ul>
                  {otherNames().map(otherName => (
                    <li key={otherName}>
                      <Link to={`/hi/${otherName}`} replace>
                        {otherName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          : ''
      }

      <div>
        <button className="m-3 text-sm btn mt-6" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  )
}

export default hi
