import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

export const artistSchema = zValidator(
  'query',
  z
    .object({
      id: z.string().optional(),
      link: z
        .string()
        .url()
        .optional()
        .transform((value) => value?.match(/jiosaavn\.com\/artist\/[^/]+\/([^/]+)$/)?.[1])
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
