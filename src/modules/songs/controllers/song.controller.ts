import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'
import { SongService } from '../services'
import { LyricsModel, SongModel } from '../models'
import type { Routes } from '../../../common/types'

export class SongController implements Routes {
  public controller: OpenAPIHono
  private songService: SongService

  constructor() {
    this.controller = new OpenAPIHono()
    this.songService = new SongService()
  }

  public initRoutes() {
    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/songs',
        tags: ['Songs'],
        summary: 'Retrieve songs by ID or link',
        description: 'Fetches song details either by a unique song ID or by a direct song link.',
        operationId: 'getSong',
        request: {
          query: z.object({
            id: z.string().optional().openapi({ description: 'ID of the song', type: 'string', example: '3IoDK8qI' }),
            link: z
              .string()
              .url()
              .optional()
              .transform((value) => value?.match(/jiosaavn\.com\/song\/[^/]+\/([^/]+)$/)?.[1])
              .openapi({
                description: 'The direct link of the song on JioSaavn',
                type: 'string',
                example: 'https://www.jiosaavn.com/song/houdini/OgwhbhtDRwM'
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with song details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the request was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: z.array(SongModel).openapi({
                    description: 'Array of song details'
                  })
                })
              }
            }
          },
          400: { description: 'Bad request when query parameters are missing or invalid' },
          404: { description: 'Song not found with the given ID or link' }
        }
      }),
      async (ctx) => {
        const { link, id } = ctx.req.valid('query')

        const response = link
          ? await this.songService.getSongByLink(link)
          : await this.songService.getSongByIds({ songIds: id! })

        return ctx.json({ success: true, data: response })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/songs/{id}',
        tags: ['Songs'],
        summary: 'Retrieve a song by its ID',
        description: 'Fetches song using its ID.',
        operationId: 'getSongById',
        request: {
          params: z.object({
            id: z.string().openapi({ description: 'ID of the song', type: 'string', example: '3IoDK8qI' })
          }),
          query: z.object({
            lyrics: z.string().default('false').openapi({
              description: 'Flag to include lyrics in the response',
              type: 'boolean',
              example: 'true',
              default: 'false'
            })
          })
        },
        responses: {
          200: {
            description: 'Successful retrieval of the song',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the request was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: z.array(SongModel).openapi({
                    description: 'Song details including lyrics if requested'
                  })
                })
              }
            }
          },
          400: { description: 'Bad request when query parameters are missing or invalid' },
          404: { description: 'Song not found with the given ID' }
        }
      }),
      async (ctx) => {
        const songId = ctx.req.param('id')
        const { lyrics } = ctx.req.valid('query')

        const response = await this.songService.getSongByIds({ songIds: songId, includeLyrics: lyrics === 'true' })

        return ctx.json({ success: true, data: response })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/songs/{id}/lyrics',
        tags: ['Songs'],
        summary: 'Retrieve lyrics for a song',
        description: 'Fetches the lyrics for a song specified by its ID.',
        operationId: 'getSongLyrics',
        request: {
          params: z.object({
            id: z.string().openapi({
              description: 'Id of the song for which to retrieve the lyrics',
              type: 'string',
              example: '1212121'
            })
          })
        },
        responses: {
          200: {
            description: 'Successful retrieval of song lyrics',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the lyrics were successfully retrieved',
                    type: 'boolean',
                    example: true
                  }),
                  data: LyricsModel.openapi({
                    description: 'Lyrics of the requested song'
                  })
                })
              }
            }
          },
          404: { description: 'Lyrics not found for the given song ID' }
        }
      }),
      async (ctx) => {
        const id = ctx.req.param('id')

        const result = await this.songService.getSongLyrics(id)

        return ctx.json({ success: true, data: result })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/songs/{id}/suggestions',
        tags: ['Songs'],
        summary: 'Retrieve song suggestions based on a song ID',
        description: 'Provides a list of suggested songs related to the song specified by its ID.',
        operationId: 'getSongSuggestions',
        request: {
          params: z.object({
            id: z.string().openapi({
              description: 'ID of the song to base the suggestions on',
              type: 'string',
              example: '1212121'
            })
          }),
          query: z.object({
            limit: z
              .string()
              .pipe(z.coerce.number().default(10))
              .openapi({ description: 'Maximum number of song suggestions to retrieve', type: 'integer', example: 10 })
          })
        },
        responses: {
          200: {
            description: 'Successful retrieval of song suggestions',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the suggestions were successfully retrieved',
                    type: 'boolean',
                    example: true
                  }),
                  data: z.array(SongModel).openapi({
                    description: 'Array of suggested songs'
                  })
                })
              }
            }
          }
        }
      }),
      async (ctx) => {
        const songId = ctx.req.param('id')
        const { limit } = ctx.req.valid('query')

        const suggestions = await this.songService.getSongSuggestions({ songId, limit })

        return ctx.json({ success: true, data: suggestions })
      }
    )
  }
}
