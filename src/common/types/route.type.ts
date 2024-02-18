import type { Hono } from 'hono'

export interface Routes {
  path?: string
  router: Hono
}
