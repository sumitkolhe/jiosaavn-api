import { z } from 'zod'
import { SongModel } from '#modules/songs/models'

export const songRequestSchema = z.object({
  id: z.string().optional().openapi({ description: 'Id of the song', type: 'string', example: 'OgwhbhtDRwM' }),
  link: z
    .string()
    .url()
    .optional()
    .transform((value) => value?.match(/jiosaavn\.com\/song\/[^/]+\/([^/]+)$/)?.[1])
    .openapi({
      description: 'song link',
      type: 'string',
      example: 'https://www.jiosaavn.com/song/houdini/OgwhbhtDRwM'
    })
})

export const songByIdRequestSchema = z.object({
  id: z.string().openapi({
    description: 'Id of the song',
    type: 'string',
    param: {
      name: 'id',
      in: 'path'
    },
    example: 'OgwhbhtDRwM'
  }),
  lyrics: z
    .boolean()
    .optional()
    .openapi({
      description: 'whether to include lyrics or not',
      type: 'boolean',
      param: {
        name: 'lyrics',
        in: 'query',
        required: false,
        schema: { type: 'boolean' }
      },
      example: true
    })
})

export const songResponseSchema = {
  200: {
    description: 'song details',
    content: {
      'application/json': {
        schema: z.object({
          success: z
            .boolean()
            .openapi({ description: 'whether the request was successful or not', type: 'boolean', example: true }),
          data: z.array(SongModel)
        })
      }
    }
  }
}
