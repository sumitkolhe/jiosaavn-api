import {} from 'dotenv/config'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import timeout from 'express-timeout-handler'
import { errorMiddleware } from './middlewares/error.middleware'
import { logger } from './utils/logger'
import { getConfig } from './configs'
import type { Request, Response } from 'express'
import type { Config } from './interfaces/config.interface'
import type { Routes } from './interfaces/routes.interface'

export class App {
  public app: express.Application
  public port: number
  public config: Config
  public env: string

  constructor(routes: Routes[]) {
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
    this.app.use(helmet())
    this.app.use(morgan(this.config.log.format))
    this.app.use(cors({ origin: this.config.cors.origin, credentials: this.config.cors.credentials }))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
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

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router)
    })
  }

  private initializeRouteFallback() {
    this.app.use((req, res) => {
      res.status(404).json({
        status: 'FAILED',
        message: 'route not found',
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
