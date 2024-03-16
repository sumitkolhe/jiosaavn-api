import { beforeAll, describe, expect, test } from 'vitest'
import { GetSongByIdUseCase } from '#modules/songs/use-cases'

describe('GetSongById', () => {
  let getSongById: GetSongByIdUseCase

  beforeAll(() => {
    getSongById = new GetSongByIdUseCase()
  })

  test('should return a song by id', async () => {
    const song = await getSongById.execute({ songIds: '3IoDK8qI' })
    expect(song).toBeDefined()
    expect(song).toHaveLength(1)
  })

  test('should return a song by id and include lyrics', async () => {
    const song = await getSongById.execute({ songIds: 'ulCA5JTi', includeLyrics: true })
    expect(song).toBeDefined()
    expect(song).toHaveLength(1)
    expect(song[0].lyrics).toBeDefined()
  })
})
