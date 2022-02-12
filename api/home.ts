import { VercelRequest, VercelResponse } from '@vercel/node'
import { axiosInstance } from '../config/axios'
import { getHomeUrl } from '../config/endpoints'

const home = async (_req: VercelRequest, res: VercelResponse) => {
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

export default home
