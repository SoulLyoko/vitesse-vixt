import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    pnpm: true,
    ignores: ['packages/shared/src/constants/base.js'],
  },
)
