export default function TheCounter(props: { initial: number }) {
  const [count, { inc, dec, reset }] = useCounter(props.initial)
  useEffect(() => reset(), [props.initial])

  return (
    <div>
      { count }
      <button className="dec" onClick={() => dec()}>
        -
      </button>
      <button className="inc" onClick={() => inc()}>
        +
      </button>
    </div>
  )
}
