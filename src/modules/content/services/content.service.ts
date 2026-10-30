import { GetTrendingUseCase } from '../use-cases'

export class ContentService {
  private readonly getTrendingUseCase: GetTrendingUseCase

  constructor() {
    this.getTrendingUseCase = new GetTrendingUseCase()
  }

  getTrending = () => {
    return this.getTrendingUseCase.execute()
  }
}
