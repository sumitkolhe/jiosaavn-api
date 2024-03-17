import { z } from 'zod'
import { DownloadLinkModel } from '#common/models'

export const SongArtistMapAPIResponseModel = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  type: z.string(),
  image: z.string(),
  perma_url: z.string()
})

export const SongArtistMapModel = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  type: z.string(),
  image: z.array(DownloadLinkModel),
  url: z.string()
})
