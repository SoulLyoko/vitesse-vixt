import path from 'node:path'
import fs from 'fs-extra'
import { defineVixtModule, loadEnv } from 'vixt'
import { BASE_URL } from '../constants/base'

const env = loadEnv()

const name = 'vixt:postbuild'
export default defineVixtModule({
  meta: { name },
  setup(_, vixt) {
    if (env.PROD) {
      const base = path.basename(vixt.options.rootDir!)
      vixt.options.app!.baseURL = `${BASE_URL}${base}/`
    }
    return {
      name,
      apply: 'build',
      closeBundle() {
        const vite = vixt.options.vite!
        const rootDistPath = path.resolve(vite.root, '../../dist')
        const srcPath = path.resolve(vite.root, vite.build.outDir)
        const destPath = path.resolve(rootDistPath, path.basename(vite.root))
        fs.removeSync(destPath)
        fs.copySync(srcPath, destPath)
      },
    }
  },
})
