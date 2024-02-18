import {
  SearchAlbumsArgs,
  SearchAlbumsUseCase,
  SearchAllUseCase,
  SearchSongsArgs,
  SearchSongsUseCase
} from '../use-cases'

export class SearchService {
  private readonly searchAllUseCase: SearchAllUseCase
  private readonly searchSongsUseCase: SearchSongsUseCase
  private readonly searchAlbumsUseCase: SearchAlbumsUseCase

  constructor() {
    this.searchAllUseCase = new SearchAllUseCase()
    this.searchSongsUseCase = new SearchSongsUseCase()
    this.searchAlbumsUseCase = new SearchAlbumsUseCase()
  }

  searchAll = async (query: string) => {
    return this.searchAllUseCase.execute(query)
  }

  searchSongs = async (args: SearchSongsArgs) => {
    return this.searchSongsUseCase.execute(args)
  }

  searchAlbums = async (args: SearchAlbumsArgs) => {
    return this.searchAlbumsUseCase.execute(args)
  }

  searchArtists = async (query: string) => {
    return this.searchAllUseCase.execute(query)
  }
}
