import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'
import { ArtistService } from '../services'
import { ArtistAlbumModel, ArtistModel, ArtistSongModel } from '../models'

export class ArtistController {
  public controller: OpenAPIHono
  private artistService: ArtistService

  constructor() {
    this.controller = new OpenAPIHono()
    this.artistService = new ArtistService()
  }

  public initRoutes() {
    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/artists',
        tags: ['artists'],
        request: {
          query: z.object({
            id: z.string().optional().openapi({ description: 'Id of the artist', type: 'string', example: 'Hq1sr6xu' }),
            link: z
              .string()
              .url()
              .optional()
              .transform((value) => value?.match(/jiosaavn\.com\/artist\/[^/]+\/([^/]+)$/)?.[1])
              .openapi({
                description: 'artist link',
                type: 'string',
                example: 'https://www.jiosaavn.com/artist/rahat-fateh-ali-khan-songs/1pZj3KZJYwA_'
              }),
            page: z
              .string()
              .pipe(z.coerce.number().default(1))
              .openapi({ description: 'page number', type: 'number', example: 1 }),
            songCount: z
              .string()
              .pipe(z.coerce.number().default(10))
              .openapi({ description: 'number of songs to fetch', type: 'number', example: 10 }),
            albumCount: z
              .string()
              .pipe(z.coerce.number().default(10))
              .openapi({ description: 'number of albums to fetch', type: 'number', example: 10 }),
            sortBy: z
              .enum(['popularity', 'latest', 'alphabetical'])
              .default('popularity')
              .openapi({ description: 'sort by', type: 'string', example: 'popularity' }),
            sortOrder: z
              .enum(['asc', 'desc'])
              .default('desc')
              .openapi({ description: 'sort order', type: 'string', example: 'desc' })
          })
        },
        responses: {
          200: {
            description: 'artist details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'whether the request was successful or not',
                    type: 'boolean',
                    example: true
                  }),
                  data: ArtistModel
                })
              }
            }
          }
        }
      }),
      async (ctx) => {
        const { link, id, page, sortBy, sortOrder, songCount, albumCount } = ctx.req.valid('query')

        const params = {
          page,
          songCount,
          albumCount,
          sortBy,
          sortOrder
        }

        const response = link
          ? await this.artistService.getArtistByLink({ token: link, ...params })
          : await this.artistService.getArtistById({ artistId: id!, ...params })

        return ctx.json({ success: true, data: response })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/artists/{id}',
        tags: ['artists'],
        request: {
          params: z.object({
            id: z.string().openapi({ example: '1212121' })
          }),
          query: z.object({
            page: z.string().pipe(z.coerce.number().default(1)),
            songCount: z.string().pipe(z.coerce.number().default(10)),
            albumCount: z.string().pipe(z.coerce.number().default(10)),
            sortBy: z.enum(['popularity', 'latest', 'alphabetical']).default('popularity'),
            sortOrder: z.enum(['asc', 'desc']).default('desc')
          })
        },
        responses: {
          200: {
            description: 'artist details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'whether the request was successful or not',
                    type: 'boolean',
                    example: true
                  }),
                  data: ArtistModel
                })
              }
            }
          }
        }
      }),
      async (ctx) => {
        const artistId = ctx.req.param('id')
        const { page, sortBy, sortOrder, songCount, albumCount } = ctx.req.valid('query')

        const response = await this.artistService.getArtistById({
          artistId,
          page,
          songCount,
          albumCount,
          sortBy,
          sortOrder
        })

        return ctx.json({ success: true, data: response })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/artists/{id}/songs',
        tags: ['artists'],
        request: {
          params: z.object({
            id: z.string().openapi({ example: '1212121' })
          }),
          query: z.object({
            page: z
              .string()
              .pipe(z.coerce.number().default(1))
              .openapi({ description: 'page number', type: 'number', example: 1 }),
            sortBy: z.enum(['popularity', 'latest', 'alphabetical']).default('popularity').openapi({
              description: 'sort by',
              type: 'string',
              example: 'popularity'
            }),
            sortOrder: z
              .enum(['asc', 'desc'])
              .default('desc')
              .openapi({ description: 'sort order', type: 'string', example: 'desc' })
          })
        },
        responses: {
          200: {
            description: 'artist songs',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'whether the request was successful or not',
                    type: 'boolean',
                    example: true
                  }),
                  data: ArtistSongModel
                })
              }
            }
          }
        }
      }),
      async (ctx) => {
        const artistId = ctx.req.param('id')
        const { page, sortBy, sortOrder } = ctx.req.valid('query')

        const response = await this.artistService.getArtistSongs({
          artistId,
          page,
          sortBy,
          sortOrder
        })

        return ctx.json({ success: true, data: response })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/artists/{id}/albums',
        tags: ['artists'],
        request: {
          params: z.object({
            id: z.string().openapi({ example: '1212121' })
          }),
          query: z.object({
            page: z
              .string()
              .pipe(z.coerce.number().default(0))
              .openapi({ description: 'page number', type: 'number', example: 1 }),
            sortBy: z.enum(['popularity', 'latest', 'alphabetical']).default('popularity').openapi({
              description: 'sort by',
              type: 'string',
              example: 'popularity'
            }),
            sortOrder: z
              .enum(['asc', 'desc'])
              .default('desc')
              .openapi({ description: 'sort order', type: 'string', example: 'desc' })
          })
        },
        responses: {
          200: {
            description: 'artist albums',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'whether the request was successful or not',
                    type: 'boolean',
                    example: true
                  }),
                  data: ArtistAlbumModel
                })
              }
            }
          }
        }
      }),
      async (ctx) => {
        const artistId = ctx.req.param('id')
        const { page, sortBy, sortOrder } = ctx.req.valid('query')

        const response = await this.artistService.getArtistAlbums({
          artistId,
          page,
          sortBy,
          sortOrder
        })

        return ctx.json({ success: true, data: response })
      }
    )
  }
}
