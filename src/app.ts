import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { apiReference } from '@scalar/hono-api-reference'
import { OpenAPIHono } from '@hono/zod-openapi'
import type { Routes } from './common/types'
import type { HTTPException } from 'hono/http-exception'

export class App {
  private app: OpenAPIHono

  constructor(routes: Routes[]) {
    this.app = new OpenAPIHono()

    this.initializeGlobalMiddlewares()
    this.initializeRoutes(routes)
    this.initializeSwaggerUI()
    this.initializeRouteFallback()
    this.initializeErrorHandler()
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      route.initRoutes()
      this.app.route('/api', route.controller)
    })
  }

  private initializeGlobalMiddlewares() {
    this.app.use(cors())
    this.app.use(logger())
    this.app.use(prettyJSON())
  }

  private initializeSwaggerUI() {
    this.app.doc('/docs', (c) => ({
      openapi: '3.0.0',
      info: { version: '1.0.0', title: 'JioSaavn API' },
      servers: [{ url: new URL(c.req.url).origin, description: 'Current environment' }]
    }))

    this.app.get(
      '/ui',
      apiReference({
        pageTitle: 'JioSaavn API',
        theme: 'saturn',
        isEditable: false,
        layout: 'modern',
        spec: { url: '/docs' }
      })
    )
  }

  private initializeRouteFallback() {
    this.app.notFound((ctx) => {
      return ctx.json({ success: false, message: 'route not found, check docs at https://docs.saavn.dev' }, 404)
    })
  }

  private initializeErrorHandler() {
    this.app.onError((err, ctx) => {
      const error = err as HTTPException
      return ctx.json({ success: false, message: error.message }, error.status || 500)
    })
  }

  public getApp() {
    return this.app
  }
}
