import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

export const songSchema = zValidator(
  'query',
  z.object({
    lyrics: z.string().transform((str) => str === 'true')
  })
)

export const songLyricsSchema = zValidator(
  'param',
  z.object({
    id: z.string()
  })
)
