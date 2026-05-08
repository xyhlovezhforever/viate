import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const projectRoot = resolve(__dirname, '..')
const distDir = resolve(projectRoot, 'dist')
const publicDir = resolve(projectRoot, 'public')

// Ensure dist directory exists
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true })
}

// Files to copy for browser extension
const filesToCopy = [
  'manifest.json',
  'background.js',
]

console.log('Copying extension files to dist...')

filesToCopy.forEach(file => {
  const src = resolve(publicDir, file)
  const dest = resolve(distDir, file)
  
  try {
    copyFileSync(src, dest)
    console.log(`✓ Copied ${file}`)
  } catch (error) {
    console.error(`✗ Failed to copy ${file}:`, error.message)
  }
})

console.log('\n📦 Extension files copied successfully!')
console.log('🚀 You can now load the extension from the "dist" directory')
console.log('   Chrome: chrome://extensions (Enable Developer Mode)')
console.log('   Edge: edge://extensions (Enable Developer Mode)')
