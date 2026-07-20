import { cpSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

rmSync(dist, { recursive: true, force: true })
mkdirSync(dist, { recursive: true })

cpSync(join(root, 'hub'), dist, { recursive: true })
cpSync(join(root, 'dental-html'), join(dist, 'dental'), { recursive: true })
cpSync(join(root, 'ai-rescue'), join(dist, 'ai-rescue'), { recursive: true })
cpSync(join(root, 'salon-vue', 'dist'), join(dist, 'salon'), { recursive: true })
cpSync(join(root, 'cafe-react', 'dist'), join(dist, 'cafe'), { recursive: true })

// Fix AI rescue after link for deployed path
writeFileSync(
  join(dist, 'ai-rescue', 'after.html'),
  `<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AFTER — AI rescue (DentaLux)</title>
  <meta http-equiv="refresh" content="0; url=/dental/" />
</head>
<body>
  <p><a href="/dental/">Open cleaned DentaLux page →</a></p>
  <p><a href="/ai-rescue/before.html">← BEFORE</a></p>
</body>
</html>
`
)

console.log('Assembled dist/ for deploy')
