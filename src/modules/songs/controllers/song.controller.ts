import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'
import { SongService } from '../services'
import { SongModel } from '../models'
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
        tags: ['songs'],
        request: {
          query: z.object({
            id: z.string().optional().openapi({ description: 'Id of the song', type: 'string', example: 'Hq1sr6xu' }),
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
        },
        responses: {
          200: {
            description: 'song details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'whether the request was successful or not',
                    type: 'boolean',
                    example: true
                  }),
                  data: z.array(SongModel)
                })
              }
            }
          }
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
        tags: ['songs'],
        request: {
          params: z.object({
            id: z.string().openapi({ example: '1212121' })
          }),
          query: z.object({
            lyrics: z
              .string()
              .default('false')
              .openapi({ description: 'Id of the song', type: 'boolean', example: 'true', default: 'false' })
          })
        },
        responses: {
          200: {
            description: 'song details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'whether the request was successful or not',
                    type: 'boolean',
                    example: true
                  }),
                  data: z.array(SongModel)
                })
              }
            }
          }
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
        tags: ['songs'],
        request: {
          params: z.object({
            id: z.string().openapi({ example: '1212121' })
          })
        },
        responses: {
          200: {
            description: 'song details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'whether the request was successful or not',
                    type: 'boolean',
                    example: true
                  }),
                  data: z.array(SongModel)
                })
              }
            }
          }
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
        tags: ['songs'],
        request: {
          params: z.object({
            id: z.string().openapi({ example: '1212121' })
          }),
          query: z.object({
            limit: z
              .string()
              .pipe(z.coerce.number().default(10))
              .openapi({ description: 'limit of suggestions', type: 'integer', example: 10 })
          })
        },
        responses: {
          200: {
            description: 'song details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'whether the request was successful or not',
                    type: 'boolean',
                    example: true
                  }),
                  data: z.array(SongModel)
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
