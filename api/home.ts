import { VercelRequest, VercelResponse } from '@vercel/node'
import { axiosInstance } from '../utils/config'
import { getHomeUrl } from '../utils/endpoints'
import { setHeaders } from '../utils/headers'

module.exports = async (_req: VercelRequest, res: VercelResponse) => {
  setHeaders(res)
  try {
    await axiosInstance
      .get(getHomeUrl())
      .then((resp) => resp.data)
      .then((data) => {
        res.json(data)
      })
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong',
    })
  }
}
