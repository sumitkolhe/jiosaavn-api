import { VercelRequest, VercelResponse } from '@vercel/node'
import { AxiosResponse } from 'axios'
import { Lyrics } from 'interfaces/lyrics'
import { axiosInstance } from 'config/axios'
import { getLyricsUrl } from 'config/endpoints'
import { setHeaders } from 'utils/headers'
import { CreateError } from 'utils/errorHandler'

const lyrics = async (req: VercelRequest, res: VercelResponse) => {
  setHeaders(res)
  const songId = req.query.id as string

  try {
    await axiosInstance.get(getLyricsUrl(songId)).then((lyricsDetails: AxiosResponse<Lyrics>) => {
      if (!lyricsDetails.data.lyrics) CreateError.BadRequest('lyrics are not available for this song')
      else
        res.json({
          lyrics: lyricsDetails.data.lyrics.replace(/<br>/g, ' '),
          snippet: lyricsDetails.data.snippet,
        })
    })
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong',
    })
  }
}

export default lyrics
