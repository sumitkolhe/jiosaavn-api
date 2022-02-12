import { VercelRequest, VercelResponse } from '@vercel/node'
import { AxiosResponse } from 'axios'
import { generateAlbumPayload } from 'helpers/createPayload'
import { axiosInstance } from 'config/axios'
import { getAlbumDetailsByTokenUrl, getAlbumDetailsUrl } from 'config/endpoints'
import { setHeaders } from 'utils/headers'
import { Album } from 'interfaces/album'
import { extractIdFromLink } from 'utils/validator'

const album = async (req: VercelRequest, res: VercelResponse) => {
  setHeaders(res)
  const albumId = req.query.id as string
  const albumToken = req.query.link as string
  if ((!albumId && !albumToken) || (albumId && albumToken))
    res.status(400).json({ message: 'incorrect query parameters' })

  try {
    if (albumId) {
      await axiosInstance.get(getAlbumDetailsUrl(albumId)).then((albumDetails: AxiosResponse<Album>) => {
        res.json(generateAlbumPayload(albumDetails.data))
      })
    } else if (albumToken) {
      const link = extractIdFromLink(albumToken, 'album')
      if (!link)
        res.status(400).json({
          message: 'invalid link',
        })
      await axiosInstance.get(getAlbumDetailsByTokenUrl(link)).then((albumDetails: AxiosResponse<Album>) => {
        res.json(generateAlbumPayload(albumDetails.data))
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong',
    })
  }
}

export default album
