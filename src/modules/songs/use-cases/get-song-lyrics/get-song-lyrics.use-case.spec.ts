import { beforeAll, describe, expect, it } from 'vitest'
import { HTTPException } from 'hono/http-exception'
import { GetSongLyricsUseCase } from '#modules/songs/use-cases'

describe('GetSongLyrics', () => {
  let getSongLyrics: GetSongLyricsUseCase

  beforeAll(() => {
    getSongLyrics = new GetSongLyricsUseCase()
  })

  it('should return lyrics for a song', async () => {
    const lyrics = await getSongLyrics.execute('ulCA5JTi')

    expect(lyrics).toMatchSnapshot()
  })

  it('should throw 404 error when lyrics are not found', async () => {
    await expect(getSongLyrics.execute('invalid-id')).rejects.toThrow(HTTPException)
  })
})
