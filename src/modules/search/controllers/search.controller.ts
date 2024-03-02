import type { Context } from 'hono'
import { SearchService } from '../services'
import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'
import { SearchAlbumModel, SearchModel, SearchSongModel } from '../models'

export class SearchController {
  public controller: OpenAPIHono
  private searchService: SearchService

  constructor() {
    this.controller = new OpenAPIHono()
    this.searchService = new SearchService()
  }

  public initRoutes() {
    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/search',
        tags: ['search'],
        summary: 'Perform a global search',
        description: 'Searches for songs, albums, artists, and playlists based on the provided query string.',
        operationId: 'globalSearch',
        request: {
          query: z.object({
            query: z.string().openapi({
              description: 'Search query string',
              type: 'string',
              example: 'Imagine Dragons'
            })
          })
        },
        responses: {
          200: {
            description: 'Successful search across all categories',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the search was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: SearchModel.openapi({
                    description: 'Search results including songs, albums, artists, and playlists'
                  })
                })
              }
            }
          }
        }
      }),
      async (ctx) => {
        const { query } = ctx.req.valid('query')

        const result = await this.searchService.searchAll(query)

        return ctx.json({ success: true, data: result })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/search/songs',
        tags: ['search'],
        summary: 'Search for songs',
        description: 'Searches for songs based on the provided query string, with pagination support.',
        operationId: 'searchSongs',
        request: {
          query: z.object({
            query: z.string().openapi({
              description: 'Search query string for songs',
              type: 'string',
              example: 'Believer'
            }),
            page: z.string().pipe(z.coerce.number().default(0)).openapi({
              description: 'Page number for pagination',
              type: 'integer',
              example: 1,
              default: 0
            }),
            limit: z.string().pipe(z.coerce.number().default(10)).openapi({
              description: 'Number of search results per page',
              type: 'integer',
              example: 10,
              default: 10
            })
          })
        },
        responses: {
          200: {
            description: 'Successful search for songs',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the song search was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: SearchSongModel.openapi({
                    description: 'Search results for songs'
                  })
                })
              }
            }
          }
        }
      }),
      async (ctx) => {
        const { query, page, limit } = ctx.req.valid('query')

        const result = await this.searchService.searchSongs({ query, page, limit })

        return ctx.json({ success: true, data: result })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/search/albums',
        tags: ['search'],
        summary: 'Search for albums',
        description: 'Searches for albums based on the provided query string, with pagination support.',
        operationId: 'searchAlbums',
        request: {
          query: z.object({
            query: z.string().openapi({
              description: 'Search query string for albums',
              type: 'string',
              example: 'Evolve'
            }),
            page: z.string().pipe(z.coerce.number().default(0)).openapi({
              description: 'Page number for pagination',
              type: 'integer',
              example: 1,
              default: 0
            }),
            limit: z.string().pipe(z.coerce.number().default(10)).openapi({
              description: 'Number of search results per page',
              type: 'integer',
              example: 10,
              default: 10
            })
          })
        },
        responses: {
          200: {
            description: 'Successful search for albums',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the album search was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: SearchAlbumModel.openapi({
                    description: 'Search results for albums'
                  })
                })
              }
            }
          }
        }
      }),
      async (ctx) => {
        const { query, page, limit } = ctx.req.valid('query')

        const result = await this.searchService.searchAlbums({ query, page, limit })

        return ctx.json({ success: true, data: result })
      }
    )
  }
}
