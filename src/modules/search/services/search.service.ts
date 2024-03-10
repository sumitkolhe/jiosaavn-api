import {
  SearchAlbumsArgs,
  SearchAlbumsUseCase,
  SearchAllUseCase,
  SearchSongsArgs,
  SearchSongsUseCase
} from '../use-cases'
import { SearchArtistsArgs, SearchArtistsUseCase } from '../use-cases/search-artists'

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

  searchAll = async (query: string) => {
    return this.searchAllUseCase.execute(query)
  }

  searchSongs = async (args: SearchSongsArgs) => {
    return this.searchSongsUseCase.execute(args)
  }

  searchAlbums = async (args: SearchAlbumsArgs) => {
    return this.searchAlbumsUseCase.execute(args)
  }

  searchArtists = async (args: SearchArtistsArgs) => {
    return this.searchArtistsUseCase.execute(args)
  }
}
