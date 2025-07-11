import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default defineVixtPlugin(({ router }) => {
  router.beforeEach(() => {
    NProgress.start()
  })
  router.afterEach((to) => {
    NProgress.done()
    const title = to.meta.title as string
    title && useTitle(title)
  })
})
