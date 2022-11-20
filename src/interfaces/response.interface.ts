export interface CustomResponse<T> {
  status: string
  message: string | null
  data: T | null
}
