import { beforeAll, describe, expect, it } from 'vitest'

import { GetSongByIdUseCase } from '#modules/songs/use-cases'

describe('GetSongById', () => {
  let getSongById: GetSongByIdUseCase

  beforeAll(() => {
    getSongById = new GetSongByIdUseCase()
  })

  it('should return a song by id', async () => {
    const song = await getSongById.execute({ songIds: '3IoDK8qI' })

    expect(song[0]).toMatchSnapshot({
      playCount: expect.any(Number)
    })
  })

  it('should return a song by id and include lyrics', async () => {
    const song = await getSongById.execute({ songIds: 'L91uYhUm', includeLyrics: true })

    expect(song[0]).toMatchSnapshot({
      playCount: expect.any(Number),
      hasLyrics: expect.any(Boolean),
      lyricsId: song[0].lyricsId ? expect.any(String) : null
    })
  })
})
