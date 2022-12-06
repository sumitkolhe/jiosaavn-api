import {} from 'dotenv/config'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import timeout from 'express-timeout-handler'
import { rateLimiterMiddleware } from './middlewares/limiter.middleware'
import { errorMiddleware } from './middlewares/error.middleware'
import { logger } from './utils/logger'
import { getConfig } from './configs'
import type { Request, Response } from 'express'
import type { Config } from './interfaces/config.interface'
import type { Route } from './interfaces/route.interface'

export class App {
  public app: express.Application
  public port: number
  public config: Config
  public env: string

  constructor(routes: Route[]) {
    this.config = getConfig()
    this.app = express()
    this.env = this.config.env
    this.port = this.config.server.port

    this.initializeMiddlewares()
    this.initializeRoutes(routes)
    this.initializeRouteFallback()
    this.initializeErrorHandling()
  }

  private initializeMiddlewares() {
    this.app.use(morgan(this.config.log.format))
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(rateLimiterMiddleware)
    // vercel has timeout limit of 10sec on hobby plan, this allows to throw an error before vercel times out
    this.app.use(
      timeout.handler({
        timeout: 9500,
        onTimeout(req: Request, res: Response) {
          res.status(503).json({
            status: 'FAILED',
            message: 'request timeout',
            data: null,
          })
        },
      })
    )
  }

  private initializeRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router)
    })
  }

  private initializeRouteFallback() {
    this.app.use((req, res) => {
      res.status(404).json({
        status: 'FAILED',
        message: 'route not found, please check documentation at https://docs.saavn.me',
        data: null,
      })
    })
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware)
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`🚀 Server listening on ${this.port}`)
    })
  }

  public getServer() {
    return this.app
  }
}
