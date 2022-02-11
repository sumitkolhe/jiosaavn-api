import { VercelRequest, VercelResponse } from '@vercel/node'

const index = async (_req: VercelRequest, res: VercelResponse) => {
  res.json({
    server: 'online',
    documentation: 'https://docs.saavn.me',
    github: 'https://github.com/sumitkolhe/jiosaavn-api',
    author: 'https://sumit.co',
  })
}
export default index
