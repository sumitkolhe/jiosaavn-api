import { LyricsModel } from '#modules/songs/models'
import { GetSongLyricsUseCase } from '#modules/songs/use-cases'
import { HTTPException } from 'hono/http-exception'
import { beforeAll, describe, expect, it } from 'vitest'

describe('GetSongLyrics', () => {
  let getSongLyrics: GetSongLyricsUseCase

  beforeAll(() => {
    getSongLyrics = new GetSongLyricsUseCase()
  })

  it('should return lyrics for a song', async () => {
    const lyrics = await getSongLyrics.execute('ulCA5JTi')

    expect(() => LyricsModel.parse(lyrics)).not.toThrow()
  })

  it('should throw 404 error when lyrics are not found', async () => {
    await expect(getSongLyrics.execute('invalid-id')).rejects.toThrow(HTTPException)
  })
})
