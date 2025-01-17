import { handle } from '@hono/node-server/vercel'
import app from '../dist/server.js'

export default handle(app)
