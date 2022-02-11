import { VercelRequest, VercelResponse } from '@vercel/node'
import { axiosInstance } from '../utils/config'
import { getSongSearchUrl } from '../utils/endpoints'
import { setHeaders } from '../utils/headers'

const searchQuery = async (query: string, res: VercelResponse) => {
  try {
    await axiosInstance
      .get(getSongSearchUrl(query))
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

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  setHeaders(res)
  const query = req.query.query as string

  if (query) searchQuery(query, res)
  else res.status(400).json({ message: 'wrong query parameters' })
}
