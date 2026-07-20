import { cpSync, mkdirSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

rmSync(dist, { recursive: true, force: true })
mkdirSync(dist, { recursive: true })

cpSync(join(root, 'hub'), dist, { recursive: true })
cpSync(join(root, 'dental-html'), join(dist, 'dental'), { recursive: true })
// ai-rescue: hidden from public deploy for now (folder kept in repo)
cpSync(join(root, 'salon-vue', 'dist'), join(dist, 'salon'), { recursive: true })
cpSync(join(root, 'cafe-react', 'dist'), join(dist, 'cafe'), { recursive: true })

console.log('Assembled dist/ for deploy')
