import { zValidator } from '@hono/zod-validator'
import { z } from '@hono/zod-openapi'

export const songSchema = zValidator(
  'query',
  z
    .object({
      id: z.string().optional(),
      link: z
        .string()
        .url()
        .optional()
        .transform((value) => value?.match(/jiosaavn\.com\/song\/[^/]+\/([^/]+)$/)?.[1])
    })
    .refine((data) => !(data.id && data.link), {
      message: 'either id or link must be provided, but not both.',
      path: ['id']
    })
    .refine((data) => data.id || data.link, {
      message: 'either id or link must be provided.',
      path: ['id']
    })
)

export const songLyricsSchema = zValidator(
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
