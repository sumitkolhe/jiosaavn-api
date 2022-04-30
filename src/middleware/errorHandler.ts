import { isCelebrateError } from 'celebrate'
import { globalConstants } from '../constants'
import type { HttpError } from 'http-errors'
import type { ErrorRequestHandler } from 'express'

export const HandleError: ErrorRequestHandler = (error: HttpError, _req, res) => {
  let statusCode: number
  let message = ''

  if (isCelebrateError(error)) {
    statusCode = 400

    for (const value of error.details.values()) {
      message += value.message.replaceAll('"', '')
    }
  } else {
    statusCode = error.status || 500
    message = error.message || 'something went wrong'
  }

  res.status(statusCode).json({
    status: globalConstants.status.failed,
    message,
  })
}
