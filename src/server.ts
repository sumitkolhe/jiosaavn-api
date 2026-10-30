import process from 'node:process'
import { serve } from '@hono/node-server'

import app from './index.js'

const port = Number(process.env.PORT) || 3000

serve({
  fetch: app.fetch,
  port
})

console.log(`Server running on port ${port}`)
