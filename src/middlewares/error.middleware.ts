import { isCelebrateError } from 'celebrate'
import { logger } from '../utils/logger'
import type { NextFunction, Request, Response } from 'express'
import type { HttpExceptionError } from '../exceptions/http.exception'

interface ValidationError {
  error: string
  location: string | undefined
}

export const errorMiddleware = (error: HttpExceptionError, req: Request, res: Response, next: NextFunction) => {
  try {
    if (isCelebrateError(error)) {
      const message: ValidationError[] = []
      const status = 400

      for (const value of error.details.values()) {
        value.details.forEach((err) => {
          message.push({
            location: err.context?.key,
            error: err.message.replaceAll('"', ''),
          })
        })
      }

      logger.error(`[${req.method}] ${req.path} || StatusCode:: ${status}, Message:: ${message}`)

      res.status(status).json({
        status: 'FAILED',
        message,
        data: null,
      })
    } else {
      const status = error.status || 500
      const message = error.message || 'Something went wrong'

      logger.error(`[${req.method}] ${req.path} || StatusCode:: ${status}, Message:: ${message}`)

      res.status(status).json({
        status: 'FAILED',
        message,
        data: null,
      })
    }
  } catch (error) {
    next(error)
  }
}
