import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

export const searchSchema = zValidator(
  'query',
  z.object({
    query: z.string(),
    page: z.string().default('0'),
    limit: z.string().default('10')
  })
)
