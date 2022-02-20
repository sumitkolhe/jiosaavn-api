import express, { NextFunction, Request, Response } from 'express'
import { parentRouter } from '../src/routes'
import { CreateError, HandleError } from '../src/middleware/errorHandler'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(parentRouter)
app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(CreateError.NotFound('Not Found'))
})
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => HandleError(err, req, res, next))

export default app
