import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import type { Routes } from './common/types'
import type { HTTPException } from 'hono/http-exception'

export class App {
  private app: Hono

  constructor(routes: Routes[]) {
    this.app = new Hono()

    this.initializeGlobalMiddlewares()
    this.initializeRoutes(routes)
    this.initializeRouteFallback()
    this.initializeErrorHandler()
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.route('/api', route.router)
    })
  }

  private initializeGlobalMiddlewares() {
    this.app.use(cors())
    this.app.use(logger())
    this.app.use(prettyJSON())
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
