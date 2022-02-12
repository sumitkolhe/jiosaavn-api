import { VercelRequest, VercelResponse } from '@vercel/node'
import { AxiosResponse } from 'axios'
import { generateSongPayload } from '../helpers/createPayload'
import { axiosInstance } from '../config/axios'
import { getSongDetailsByTokenUrl, getSongDetailsUrl } from '../config/endpoints'
import { Song } from '../interfaces/song'
import { extractIdFromLink } from '../utils/validator'

const song = async (req: VercelRequest, res: VercelResponse) => {
  const songId = req.query.pids as string
  const songToken = req.query.link as string
  if ((!songId && !songToken) || (songId && songToken)) res.status(400).json({ message: 'incorrect query parameters' })

  try {
    if (songId) {
      await axiosInstance
        .get(getSongDetailsUrl(songId))
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
    } else if (songToken) {
      const link = extractIdFromLink(songToken, 'song')
      if (!link)
        res.status(400).json({
          message: 'invalid link',
        })
      await axiosInstance.get(getSongDetailsByTokenUrl(link)).then((songDetails: AxiosResponse<Song | any>) => {
        res.json(generateSongPayload(songDetails.data.songs[0]))
      })
    }
  } catch (error) {
    res.status(400).json({
      message: 'something went wrong',
    })
  }
}

export default song
