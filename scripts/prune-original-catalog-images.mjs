import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { CATALOG_IMAGE_ROOT } from '../src/config/catalogData.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const distRoot = path.join(repoRoot, 'dist')
const target = path.join(distRoot, CATALOG_IMAGE_ROOT)
const resolvedTarget = path.resolve(target)
const resolvedDist = path.resolve(distRoot)

if (!resolvedTarget.startsWith(resolvedDist + path.sep)) {
  throw new Error(`Refusing to remove path outside dist: ${resolvedTarget}`)
}

try {
  await fs.rm(resolvedTarget, { recursive: true, force: true })
  console.log(`Removed original catalog images from ${path.relative(repoRoot, resolvedTarget)}`)
} catch (error) {
  if (error.code !== 'ENOENT') throw error
}
