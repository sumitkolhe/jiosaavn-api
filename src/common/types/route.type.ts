import type { OpenAPIHono } from '@hono/zod-openapi'

export interface Routes {
  controller: OpenAPIHono
  initRoutes: () => void
}
