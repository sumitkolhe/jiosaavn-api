interface Obj {
  [key: string]: any
}

export interface IUseCase<T extends Obj = any, TRes = any> {
  execute: (params: T) => Promise<TRes>
}
