import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { HttpExceptionError } from '../exceptions/http.exception'
import type { NextFunction, Request, Response } from 'express'
import 'isomorphic-fetch'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(6, '1 m'),
  // ephemeralCache: cache,
})

export const rateLimiterMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const xff = req.headers['x-forwarded-for']

    const userIp = xff ? (Array.isArray(xff) ? xff[0] : xff.split(',')[0]) : '127.0.0.1'

    const { success, remaining, limit, reset } = await ratelimit.limit(`ip:${userIp}`)

    const remainingSeconds = Math.abs((Date.now() - reset) / 1000).toFixed(0)

    if (!success) throw new HttpExceptionError(429, `rate limit exceeded, retry in ${remainingSeconds} seconds`)

    res.set('x-ratelimit-remaining', remaining.toString())
    res.set('x-ratelimit-limit', limit.toString())
    res.set('x-ratelimit-reset', reset.toString())

    next()
  } catch (error) {
    next(error)
  }
}
