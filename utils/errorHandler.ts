export class CreateError extends Error {
  public status: number

  public message: string

  public constructor(status: number, message: string) {
    super(message)
    this.status = status
    this.message = message
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
