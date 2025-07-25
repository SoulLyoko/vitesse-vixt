import { Outlet } from 'react-router'

function LayoutHome() {
  return (
    <main px-4 py-10 text="center gray-700 dark:gray-200">
      <Outlet />
      <TheFooter />
      <div mx-auto mt-5 text-center text-sm opacity-50>
        [Home Layout]
      </div>
    </main>
  )
}

export default LayoutHome
