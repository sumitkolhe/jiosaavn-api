import { isCelebrateError } from 'celebrate'
import { logger } from '../utils/logger'
import type { NextFunction, Request, Response } from 'express'
import type { HttpExceptionError } from '../exceptions/http.exception'

export const errorMiddleware = (error: HttpExceptionError, req: Request, res: Response, next: NextFunction) => {
  try {
    let status: number
    let message = ''

    if (isCelebrateError(error)) {
      status = 400
      for (const value of error.details.values()) {
        message += value.message.replaceAll('"', '')
      }
    } else {
      status = error.status || 500
      message = error.message || 'Something went wrong'
    }

    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`)

    res.status(status).json({
      status: 'FAILED',
      message,
      data: null,
    })
  } catch (error) {
    next(error)
  }
}
