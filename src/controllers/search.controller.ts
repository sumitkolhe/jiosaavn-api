export class SearchController {
  // get homepage data
  public static homeData: RequestHandler = async (_req, res, next) => {
    try {
      const homeData = await MiscellaneousService.home()

      res.json({ status: globalConstants.status.success, results: homeData })
    } catch (error) {
      next(error)
    }
  }
}
