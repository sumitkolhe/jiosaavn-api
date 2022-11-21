import { Ratelimit } from '@upstash/ratelimit' // for deno: see above
import { Redis } from '@upstash/redis'
import { HttpExceptionError } from '../exceptions/http.exception'
import type { NextFunction, Request, Response } from 'express'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '30 s'),
  // ephemeralCache: cache,
})

export const rateLimiterMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const xff = req.headers['x-forwarded-for']

    const userIp = xff ? (Array.isArray(xff) ? xff[0] : xff.split(',')[0]) : '127.0.0.1'

    const { success } = await ratelimit.limit(`ip:${userIp}`)

    console.log(success)
    if (!success) throw new HttpExceptionError(429, 'rate limit exceeded')

    next()
  } catch (error) {
    next(error)
  }
}
