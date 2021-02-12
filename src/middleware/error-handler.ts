import { ErrorRequestHandler } from "express";

export class CreateError extends Error {
  public status: number;
  public message: any;
  public constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }

  static NoContent(message?: string) {
    return new CreateError(204, message || "No Content");
  }
  static BadRequest(message?: string) {
    return new CreateError(400, message || "Bad Request");
  }
  static Unauthorized(message?: string) {
    return new CreateError(401, message || "Unauthorized");
  }
  static Forbidden(message?: string) {
    return new CreateError(403, message || "Forbidden");
  }
  static NotFound(message?: string) {
    return new CreateError(404, message || "Not Found");
  }
  static Conflict(message?: string) {
    return new CreateError(400, message || "Conflict");
  }
  static MethodNotAllowed(message?: string) {
    return new CreateError(405, message || "Method Not Allowed");
  }
  static TooManyRequests(message?: string) {
    return new CreateError(429, message || "Too Many Requests");
  }
  static InternalServerError(message?: string) {
    return new CreateError(500, message || "Something Went Wrong");
  }
}

export const HandleError: ErrorRequestHandler = (
  error: CreateError,
  _req,
  res,
  _next
) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong";
  res.status(status).json({
    status,
    message,
  });
};
