export class HttpExceptionError extends Error {
  public status: number
  public message: string

  constructor(status: number, message: string) {
    super(message)
    this.status = status
    this.name = 'HttpExceptionError'
  }
}
