import LRU from 'lru-cache'
import { HttpExceptionError } from '../exceptions/http.exception'
import { getConfig } from '../configs'
import type { NextFunction, Request, Response } from 'express'

const { enableRateLimit } = getConfig()

const tokenCache = new LRU({
  max: 500,
  ttl: 60000,
})

export const rateLimiterMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // skip middleware if rate limit is disabled
    if (!enableRateLimit || req.path === '/') return next()

    const limit = 6

    const xff = req.headers['x-forwarded-for']

    const userIp = xff ? (Array.isArray(xff) ? xff[0] : xff.split(',')[0]) : '127.0.0.1'

    const tokenCount = (tokenCache.get(userIp) as number[]) || [0]

    if (tokenCount[0] === 0) tokenCache.set(userIp, tokenCount)

    tokenCount[0] += 1

    const currentUsage = tokenCount[0]
    const isRateLimited = currentUsage > limit

    res.set('x-ratelimit-remaining', isRateLimited ? '0' : (limit - currentUsage).toString())
    res.set('x-ratelimit-limit', limit.toString())

    if (isRateLimited) throw new HttpExceptionError(429, 'rate limit exceeded, please try again later')

    next()
  } catch (error) {
    next(error)
  }
}
