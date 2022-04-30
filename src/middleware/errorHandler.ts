import { isCelebrateError } from 'celebrate'
import { globalConstants } from '../constants'
import type { ErrorRequestHandler } from 'express'

export class CreateError extends Error {
  public status: number

  public message!: string

  public constructor(status: number, message: string) {
    super(message)
    this.status = status
    this.name = 'CreateError'
  }

  static NoContent(message?: string): CreateError {
    return new CreateError(204, message || 'No Content')
  }

  static BadRequest(message?: string): CreateError {
    return new CreateError(400, message || 'Bad Request')
  }

  static NotFound(message?: string): CreateError {
    return new CreateError(404, message || 'Not Found')
  }

  static MethodNotAllowed(message?: string): CreateError {
    return new CreateError(405, message || 'Method Not Allowed')
  }

  static InternalServerError(message?: string): CreateError {
    return new CreateError(500, message || 'Something Went Wrong')
  }
}

export const HandleError: ErrorRequestHandler = (error: CreateError, _req, res) => {
  let statusCode: number
  let message = ''

  if (isCelebrateError(error)) {
    statusCode = 400

    for (const value of error.details.values()) {
      message += value.message.replaceAll('"', '')
    }
  } else {
    statusCode = error.status || 500
    message = error.message || 'Something went wrong'
  }

  res.status(statusCode).json({
    status: globalConstants.status.failed,
    message,
  })
}
