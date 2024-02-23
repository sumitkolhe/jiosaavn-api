import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

export const songSchema = zValidator(
  'query',
  z.object({
    lyrics: z
      .string()
      .transform((str) => str === 'true')
      .optional()
  })
)

export const songSuggestionSchema = zValidator(
  'query',
  z.object({
    limit: z.string().default('5')
  })
)
