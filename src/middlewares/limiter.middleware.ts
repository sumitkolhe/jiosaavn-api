import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis/with-fetch'
import { HttpExceptionError } from '../exceptions/http.exception'
import { getConfig } from '../configs'
import type { NextFunction, Request, Response } from 'express'

const { rateLimit } = getConfig()

const rateLimiter = rateLimit.enable
  ? new Ratelimit({
      redis: new Redis({
        url: rateLimit.redisRestUrl as string,
        token: rateLimit.redisRestToken as string,
      }),
      limiter: Ratelimit.slidingWindow(6, '1 m'),
    })
  : ({} as Ratelimit)

export const rateLimiterMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // skip middleware if rate limit is disabled
    if (!rateLimit.enable) return next()

    const xff = req.headers['x-forwarded-for']

    const userIp = xff ? (Array.isArray(xff) ? xff[0] : xff.split(',')[0]) : '127.0.0.1'

    const { success, remaining, limit, reset } = await rateLimiter.limit(`ip:${userIp}`)

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
