import {
  type SearchAlbumsArgs,
  SearchAlbumsUseCase,
  SearchAllUseCase,
  type SearchArtistsArgs,
  SearchArtistsUseCase,
  type SearchSongsArgs,
  SearchSongsUseCase
} from '#modules/search/use-cases'

export class SearchService {
  private readonly searchAllUseCase: SearchAllUseCase
  private readonly searchSongsUseCase: SearchSongsUseCase
  private readonly searchAlbumsUseCase: SearchAlbumsUseCase
  private readonly searchArtistsUseCase: SearchArtistsUseCase

  constructor() {
    this.searchAllUseCase = new SearchAllUseCase()
    this.searchSongsUseCase = new SearchSongsUseCase()
    this.searchAlbumsUseCase = new SearchAlbumsUseCase()
    this.searchArtistsUseCase = new SearchArtistsUseCase()
  }

  searchAll = (query: string) => {
    return this.searchAllUseCase.execute(query)
  }

  searchSongs = (args: SearchSongsArgs) => {
    return this.searchSongsUseCase.execute(args)
  }

  searchAlbums = (args: SearchAlbumsArgs) => {
    return this.searchAlbumsUseCase.execute(args)
  }

  searchArtists = (args: SearchArtistsArgs) => {
    return this.searchArtistsUseCase.execute(args)
  }
}
