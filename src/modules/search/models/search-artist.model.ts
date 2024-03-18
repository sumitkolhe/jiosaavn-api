import { z } from 'zod'
import { ArtistMapModel } from '#modules/artists/models'

export const SearchArtistAPIResponseModel = z.object({
  total: z.number(),
  start: z.number(),
  results: z.array(
    z.object({
      name: z.string(),
      id: z.string(),
      ctr: z.number(),
      entity: z.number(),
      image: z.string().url(),
      role: z.string(),
      perma_url: z.string().url(),
      type: z.string(),
      mini_obj: z.boolean(),
      isRadioPresent: z.boolean(),
      is_followed: z.boolean()
    })
  )
})

export const SearchArtistModel = z.object({
  total: z.number(),
  start: z.number(),
  results: z.array(ArtistMapModel)
})
