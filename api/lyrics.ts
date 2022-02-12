import { VercelRequest, VercelResponse } from '@vercel/node'
import { AxiosResponse } from 'axios'
import { Lyrics } from '../interfaces/lyrics'
import { axiosInstance } from '../config/axios'
import { endpoints } from '../config/endpoints'
import { CreateError } from '../middleware/errorHandler'

const lyricsData = async (req: VercelRequest, res: VercelResponse) => {
  const songId = req.query.id as string

  try {
    const lyrics: AxiosResponse<Lyrics> = await axiosInstance.get(endpoints.lyrics + songId)

    if (!lyrics.data.lyrics) CreateError.BadRequest('lyrics are not available for this song')

    res.json({
      lyrics: lyrics.data.lyrics.replace(/<br>/g, ' '),
      snippet: lyrics.data.snippet,
    })
  } catch (error) {
    CreateError.InternalServerError(error as string)
  }
}

export default lyricsData
