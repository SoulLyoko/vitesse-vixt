export default defineVixtPlugin(() => {
  const routerInterceptorOptions = {
    invoke(args: { url: string }) {
      if (args.url === '/')
        return
      if (args.url.startsWith('pages'))
        args.url = `/${args.url}`
      if (!args.url.startsWith('/pages'))
        args.url = `/pages${args.url}`
    },
    fail(e: any) {
      if (e.errMsg?.includes('not found'))
        uni.navigateTo({ url: '/404' })
    },
  }
  uni.addInterceptor('navigateTo', routerInterceptorOptions)
  uni.addInterceptor('redirectTo', routerInterceptorOptions)
})
