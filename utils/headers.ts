import { VercelResponse } from '@vercel/node'

export const setHeaders = (res: VercelResponse): VercelResponse => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate')
  res.setHeader('Author', 'Sumit Kolhe')
  res.setHeader('Github', 'https://github.com/sumitkolhe/jiosaavn-api')
  return res
}
