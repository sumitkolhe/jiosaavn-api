import express from 'express'

const app = express()

app.get('/', (_req: express.Request, res: express.Response) => {
  res.json({
    server: 'online',
    documentation: 'https://docs.saavn.me',
    github: 'https://github.com/sumitkolhe/jiosaavn-api',
    author: 'https://sumit.co',
  })
})

export default app
