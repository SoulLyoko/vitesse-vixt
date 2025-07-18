import { Outlet } from 'react-router'

function LayoutDefault() {
  return (
    <main px-4 py-10 text="center gray-700 dark:gray-200">
      <Outlet />
      <TheFooter />
      <div mx-auto mt-5 text-center text-sm opacity-50>
        [Default Layout]
      </div>
    </main>
  )
}

export default LayoutDefault
