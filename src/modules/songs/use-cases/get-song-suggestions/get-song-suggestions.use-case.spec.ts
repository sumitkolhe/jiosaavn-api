import { beforeAll, describe, expect, test } from 'vitest'
import { GetSongSuggestionsUseCase } from '#modules/songs/use-cases'

describe('GetSongSuggestions', () => {
  let getSongSuggestions: GetSongSuggestionsUseCase

  beforeAll(() => {
    getSongSuggestions = new GetSongSuggestionsUseCase()
  })

  test('should return song suggestions', async () => {
    const response = await getSongSuggestions.execute({ songId: 'ulCA5JTi', limit: 10 })

    expect(response).toBeDefined()
    expect(response).toHaveLength(10)
  })
})
