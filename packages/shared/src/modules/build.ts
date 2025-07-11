import path from 'node:path'
import { defineVixtModule } from 'vixt'
import { BASE_URL } from '../constants/base'

const name = 'vixt:build'
export default defineVixtModule({
  meta: { name },
  setup(_, vixt) {
    const base = path.basename(vixt.options.rootDir!)
    vixt.options.app!.baseURL = `${BASE_URL}${base}/`

    return {
      name,
      apply: 'build',
      config() {
        return {
          build: {
            outDir: `../../dist/${base}`,
            emptyOutDir: true,
          },
        }
      },
    }
  },
})
