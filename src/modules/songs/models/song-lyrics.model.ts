import { z } from 'zod'

export const LyricsModel = z.object({
  lyrics: z.string(),
  copyright: z.string(),
  snippet: z.string()
})

export const LyricsAPIResponseModel = z.object({
  lyrics: z.string(),
  lyrics_copyright: z.string(),
  snippet: z.string()
})
