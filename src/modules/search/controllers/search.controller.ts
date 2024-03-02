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
        request: {
          query: z.object({
            query: z.string()
          })
        },
        responses: {
          200: {
            description: 'search songs, albums, artists, and playlists',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'whether the request was successful or not',
                    type: 'boolean',
                    example: true
                  }),
                  data: SearchModel
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
        request: {
          query: z.object({
            query: z.string(),
            page: z.string().pipe(z.coerce.number().default(0)),
            limit: z.string().pipe(z.coerce.number().default(10))
          })
        },
        responses: {
          200: {
            description: 'search songs',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'whether the request was successful or not',
                    type: 'boolean',
                    example: true
                  }),
                  data: SearchSongModel
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
        request: {
          query: z.object({
            query: z.string(),
            page: z.string().pipe(z.coerce.number().default(0)),
            limit: z.string().pipe(z.coerce.number().default(10))
          })
        },
        responses: {
          200: {
            description: 'search albums',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'whether the request was successful or not',
                    type: 'boolean',
                    example: true
                  }),
                  data: SearchAlbumModel
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
