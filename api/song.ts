import { VercelRequest, VercelResponse } from '@vercel/node'
import { AxiosResponse } from 'axios'
import { generateSongPayload } from '@helpers/createPayload'
import { axiosInstance } from '@config/axios'
import { getSongDetailsByTokenUrl, getSongDetailsUrl } from '../config/endpoints'
import { setHeaders } from '@utils/headers'
import { songDetails } from '@interfaces/song'
import { extractIdFromLink } from '@utils/validator'

const song = async (req: VercelRequest, res: VercelResponse) => {
  setHeaders(res)

  const song_id = req.query.pids as string
  const song_token = req.query.link as string
  if ((!song_id && !song_token) || (song_id && song_token))
    res.status(400).json({ message: 'incorrect query parameters' })

  try {
    if (song_id) {
      await axiosInstance
        .get(getSongDetailsUrl(song_id))
        .then((resp) => resp.data)
        .then((data) => {
          const resArray = []
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              resArray.push(generateSongPayload(data[key]))
            }
          }

          res.json(resArray)
        })
    } else if (song_token) {
      const link = extractIdFromLink(song_token, 'song')
      if (!link)
        res.status(400).json({
          message: 'invalid link',
        })
      await axiosInstance.get(getSongDetailsByTokenUrl(link)).then((song_details: AxiosResponse<songDetails | any>) => {
        res.json(generateSongPayload(song_details.data.songs[0]))
      })
    }
  } catch (error) {
    res.status(400).json({
      message: 'something went wrong',
    })
  }
}

export default song
