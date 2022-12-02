/* eslint-disable unicorn/custom-error-definition */
type Status = 400 | 401 | 403 | 404 | 409 | 422 | 429 | 500 | 503

export class HttpExceptionError extends Error {
  public status: Status
  public message: string

  constructor(status: Status, message: string) {
    super()
    this.status = status
    this.message = message
    this.name = 'HttpExceptionError'
  }
}
