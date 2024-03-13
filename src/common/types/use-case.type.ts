interface Obj {
  [key: string]: any
}

export interface IUseCase<T extends Obj | string = any, TRes = any> {
  execute: (params: T) => Promise<TRes>
}
