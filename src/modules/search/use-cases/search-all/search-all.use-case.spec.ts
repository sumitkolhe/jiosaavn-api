import { beforeAll, describe, expect, test } from 'vitest'
import { SearchAllUseCase } from '#modules/search/use-cases'

describe('SearchEverything', () => {
  let searchAllUseCase: SearchAllUseCase

  beforeAll(() => {
    searchAllUseCase = new SearchAllUseCase()
  })

  test('should search everything by query and return a list of results', async () => {
    const results = await searchAllUseCase.execute('imagine+dragons+bones')

    expect(results).toMatchSnapshot()
  })
})
