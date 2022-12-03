import type { Endpoint } from './endpoint.interface'

export interface Config {
  env: string
  server: {
    host: string
    port: number
  }
  cors: {
    origin: string | boolean
    credentials: boolean
  }
  rateLimit: {
    enable: boolean
    redisRestUrl: string | undefined
    redisRestToken: string | undefined
  }
  log: {
    format: 'combined' | 'common' | 'dev' | 'short' | 'tiny'
    level: 'error' | 'warn' | 'info' | 'http' | 'debug'
  }
  baseURL: string
  endpoint: Endpoint
}
