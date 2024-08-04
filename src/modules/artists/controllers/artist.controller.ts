import { createRoute, OpenAPIHono } from '@hono/zod-openapi'
import { ArtistAlbumModel, ArtistModel, ArtistSongModel } from '#modules/artists/models'
import { ArtistService } from '#modules/artists/services'
import { z } from 'zod'
import type { Routes } from '#common/types'

export class ArtistController implements Routes {
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
        tags: ['Artists'],
        summary: 'Retrieve artists by ID or link',
        description: `Retrieve artists by ID or by a direct artist link.`,
        operationId: 'getArtistByIdOrLink',
        request: {
          query: z.object({
            id: z.string().optional().openapi({
              title: 'Artist ID',
              description: 'Artist ID',
              type: 'string',
              example: '1274170'
            }),
            link: z
              .string()
              .url()
              .optional()
              .transform((value) => value?.match(/jiosaavn\.com\/artist\/[^/]+\/([^/]+)$/)?.[1])
              .openapi({
                title: 'Artist Link',
                description: 'A direct link to the artist on JioSaavn',
                type: 'string',
                example: 'https://www.jiosaavn.com/artist/dua-lipa-songs/r-OWIKgpX2I_'
              }),
            page: z.string().pipe(z.coerce.number()).optional().openapi({
              title: 'Page number',
              description: 'page number',
              type: 'number',
              example: '1'
            }),
            songCount: z.string().pipe(z.coerce.number()).optional().openapi({
              title: 'Song count',
              description: 'Number of songs to fetch',
              type: 'number',
              example: '10'
            }),
            albumCount: z.string().pipe(z.coerce.number()).optional().openapi({
              title: 'Album count',
              description: 'Number of albums to fetch',
              type: 'number',
              example: '10'
            }),
            sortBy: z.enum(['popularity', 'latest', 'alphabetical']).optional().openapi({
              title: 'Sort by',
              description: 'sort by',
              type: 'string',
              example: 'popularity'
            }),
            sortOrder: z.enum(['asc', 'desc']).optional().openapi({
              title: 'Sort order',
              description: 'sort order',
              type: 'string',
              example: 'desc',
              default: 'desc'
            })
          })
        },
        responses: {
          200: {
            description: 'Successful response with artist details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the request was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: ArtistModel.openapi({
                    description: 'Artist details'
                  })
                })
              }
            }
          }
        }
      }),
      async (ctx) => {
        const {
          link,
          id,
          page = 0,
          sortBy = 'popularity',
          sortOrder = 'asc',
          songCount = 10,
          albumCount = 10
        } = ctx.req.valid('query')

        const response = link
          ? await this.artistService.getArtistByLink({ token: link, page, songCount, albumCount, sortBy, sortOrder })
          : await this.artistService.getArtistById({ artistId: id!, page, songCount, albumCount, sortBy, sortOrder })

        return ctx.json({ success: true, data: response })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/artists/{id}',
        tags: ['Artists'],
        summary: 'Retrieve artist by ID',
        description: 'Retrieve artist by ID',
        operationId: 'getArtistById',
        request: {
          params: z.object({
            id: z.string().openapi({
              title: 'Artist ID',
              description: 'ID of the artist to retrieve',
              type: 'string',
              example: '1274170'
            })
          }),
          query: z.object({
            page: z.string().pipe(z.coerce.number()).optional().openapi({
              title: 'Page number',
              description: 'The page number of the results to retrieve',
              type: 'integer',
              example: '0'
            }),
            songCount: z.string().pipe(z.coerce.number()).optional().openapi({
              title: 'Song count',
              description: 'The number of songs to retrieve for the artist',
              type: 'integer',
              example: '10'
            }),
            albumCount: z.string().pipe(z.coerce.number()).optional().openapi({
              title: 'Album count',
              description: 'The number of albums to retrieve for the artist',
              type: 'integer',
              example: '10'
            }),
            sortBy: z
              .enum(['popularity', 'latest', 'alphabetical'])
              .optional()
              .openapi({
                title: 'Sort by',
                description: 'The field to sort the results by',
                type: 'string',
                example: 'popularity',
                enum: ['popularity', 'latest', 'alphabetical']
              }),
            sortOrder: z
              .enum(['asc', 'desc'])
              .optional()
              .openapi({
                title: 'Sort order',
                description: 'The order to sort the results by',
                type: 'string',
                example: 'desc',
                enum: ['asc', 'desc']
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with artist details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the request was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: ArtistModel
                })
              }
            }
          },
          404: {
            description: 'Artist not found for the given ID'
          }
        }
      }),
      async (ctx) => {
        const artistId = ctx.req.param('id')
        const { page, sortBy, sortOrder, songCount, albumCount } = ctx.req.valid('query')

        const response = await this.artistService.getArtistById({
          artistId,
          page: page || 0,
          songCount: songCount || 10,
          albumCount: albumCount || 10,
          sortBy: sortBy || 'popularity',
          sortOrder: sortOrder || 'asc'
        })

        return ctx.json({ success: true, data: response })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/artists/{id}/songs',
        tags: ['Artists'],
        summary: `Retrieve artist's songs`,
        description: 'Retrieve a list of songs for a given artist by their ID, with optional sorting and pagination.',
        operationId: 'getArtistSongs',
        request: {
          params: z.object({
            id: z.string().openapi({
              description: 'ID of the artist to retrieve the songs for',
              type: 'string',
              example: '1274170',
              default: '1274170'
            })
          }),
          query: z.object({
            page: z.string().pipe(z.coerce.number()).optional().openapi({
              description: 'The page number of the results to retrieve',
              type: 'number',
              example: '0',
              default: '0'
            }),
            sortBy: z
              .enum(['popularity', 'latest', 'alphabetical'])
              .optional()
              .openapi({
                description: 'The criterion to sort the songs by',
                type: 'string',
                example: 'popularity',
                enum: ['popularity', 'latest', 'alphabetical'],
                default: 'popularity'
              }),
            sortOrder: z
              .enum(['asc', 'desc'])
              .optional()
              .openapi({
                description: 'The order to sort the songs',
                type: 'string',
                example: 'desc',
                enum: ['asc', 'desc'],
                default: 'desc'
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with a list of songs for the artist',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the request was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: ArtistSongModel.openapi({
                    description: 'An array of songs associated with the artist'
                  })
                })
              }
            }
          },
          404: {
            description: 'Artist not found for the given ID'
          }
        }
      }),
      async (ctx) => {
        const artistId = ctx.req.param('id')
        const { page, sortBy, sortOrder } = ctx.req.valid('query')

        const response = await this.artistService.getArtistSongs({
          artistId,
          page: page || 0,
          sortBy: sortBy || 'popularity',
          sortOrder: sortOrder || 'desc'
        })

        return ctx.json({ success: true, data: response })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/artists/{id}/albums',
        tags: ['Artists'],
        summary: `Retrieve artist's albums`,
        description: 'Retrieve a list of albums for a given artist by their ID, with optional sorting and pagination.',
        operationId: 'getArtistAlbums',
        request: {
          params: z.object({
            id: z.string().openapi({
              description: 'ID of the artist to retrieve the albums for',
              type: 'string',
              example: '1274170',
              default: '1274170'
            })
          }),
          query: z.object({
            page: z.string().pipe(z.coerce.number()).optional().openapi({
              description: 'The page number of the results to retrieve',
              type: 'number',
              example: '0',
              default: '0'
            }),
            sortBy: z
              .enum(['popularity', 'latest', 'alphabetical'])
              .optional()
              .openapi({
                description: 'The criterion to sort the albums by',
                type: 'string',
                example: 'popularity',
                enum: ['popularity', 'latest', 'alphabetical'],
                default: 'popularity'
              }),
            sortOrder: z
              .enum(['asc', 'desc'])
              .optional()
              .openapi({
                description: 'The order to sort the albums',
                type: 'string',
                example: 'desc',
                enum: ['asc', 'desc'],
                default: 'desc'
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with a list of albums for the artist',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the request was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: ArtistAlbumModel.openapi({
                    description: 'An array of albums associated with the artist'
                  })
                })
              }
            }
          },
          404: {
            description: 'Artist not found for the given ID'
          }
        }
      }),
      async (ctx) => {
        const artistId = ctx.req.param('id')
        const { page, sortBy, sortOrder } = ctx.req.valid('query')

        const response = await this.artistService.getArtistAlbums({
          artistId,
          page: page || 0,
          sortBy: sortBy || 'popularity',
          sortOrder: sortOrder || 'desc'
        })

        return ctx.json({ success: true, data: response })
      }
    )
  }
}
