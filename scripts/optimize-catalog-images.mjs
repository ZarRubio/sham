import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import {
  CATALOG_IMAGE_ROOT,
  CATALOG_PRODUCT_DATA,
  OPTIMIZED_IMAGE_ROOT,
} from '../src/config/catalogData.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const publicRoot = path.join(repoRoot, 'public')
const sourceRoot = path.join(publicRoot, CATALOG_IMAGE_ROOT)
const outputRoot = path.join(publicRoot, OPTIMIZED_IMAGE_ROOT)

const CARD_SIZE = 900
const DETAIL_SIZE = 1800
const THUMB_SIZE = 240
// `--thumbs-only` regenerates just the gallery thumbnails (thumb-N.webp)
const THUMBS_ONLY = process.argv.includes('--thumbs-only')

function sourcePath(product, file) {
  if (product.sourceDir) return path.join(sourceRoot, product.sourceDir, file)
  return path.join(sourceRoot, product.category, product.subcategory, product.name, file)
}

function outputPath(productId, file) {
  return path.join(outputRoot, productId, file)
}

async function optimizeImage(input, output, size, quality) {
  await sharp(input, { limitInputPixels: false })
    .rotate()
    .resize(size, size, {
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({
      quality,
      effort: 5,
    })
    .toFile(output)
}

async function main() {
  await fs.mkdir(outputRoot, { recursive: true })

  let totalInputBytes = 0
  let totalOutputBytes = 0

  for (const product of CATALOG_PRODUCT_DATA) {
    const productOutput = path.join(outputRoot, product.id)
    await fs.mkdir(productOutput, { recursive: true })

    if (!THUMBS_ONLY) {
      const firstImage = product.files[0]
      const firstSource = sourcePath(product, firstImage.file)
      const cardOutput = outputPath(product.id, 'card.webp')

      await optimizeImage(firstSource, cardOutput, CARD_SIZE, 76)
      totalInputBytes += (await fs.stat(firstSource)).size
      totalOutputBytes += (await fs.stat(cardOutput)).size
    }

    for (const [index, image] of product.files.entries()) {
      const input = sourcePath(product, image.file)
      const outputs = [[`thumb-${index + 1}.webp`, THUMB_SIZE, 76]]
      if (!THUMBS_ONLY) outputs.unshift([`detail-${index + 1}.webp`, DETAIL_SIZE, 82])

      for (const [file, size, quality] of outputs) {
        const output = outputPath(product.id, file)
        await optimizeImage(input, output, size, quality)
        totalInputBytes += (await fs.stat(input)).size
        totalOutputBytes += (await fs.stat(output)).size
      }
    }

    console.log(`Optimized ${product.id}`)
  }

  const inputMb = (totalInputBytes / 1024 / 1024).toFixed(1)
  const outputMb = (totalOutputBytes / 1024 / 1024).toFixed(1)
  console.log(`Done. Processed ${CATALOG_PRODUCT_DATA.length} products: ${inputMb} MB source reads -> ${outputMb} MB WebP output.`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
