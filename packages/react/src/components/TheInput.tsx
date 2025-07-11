export default function TheInput(props: React.JSX.IntrinsicElements['input']) {
  return (
    <input
      id="input"
      type="text"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ solid gray-200 rounded dark:gray-700"
      outline="none active:none"
      {...props}
    >
    </input>
  )
}
