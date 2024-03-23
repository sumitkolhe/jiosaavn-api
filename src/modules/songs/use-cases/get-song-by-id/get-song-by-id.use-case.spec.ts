import { beforeAll, describe, expect, test } from 'vitest'
import { GetSongByIdUseCase } from '#modules/songs/use-cases'

describe('GetSongById', () => {
  let getSongById: GetSongByIdUseCase

  beforeAll(() => {
    getSongById = new GetSongByIdUseCase()
  })

  test('should return a song by id', async () => {
    const song = await getSongById.execute({ songIds: '3IoDK8qI' })

    expect(song[0]).toMatchSnapshot({
      playCount: expect.any(Number)
    })
  })

  test('should return a song by id and include lyrics', async () => {
    const song = await getSongById.execute({ songIds: 'L91uYhUm', includeLyrics: true })

    expect(song[0]).toMatchSnapshot({
      playCount: expect.any(Number),
      hasLyrics: expect.any(Boolean),
      lyricsId: expect.anything()
    })
  })
})
