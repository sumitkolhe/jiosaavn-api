import { createDecipheriv } from 'node:crypto'
import { Buffer } from 'node:buffer'

export const createDownloadLinks = (encryptedMediaUrl: string) => {
  if (!encryptedMediaUrl) return []

  const qualities = [
    { id: '_12', bitrate: '12kbps' },
    { id: '_48', bitrate: '48kbps' },
    { id: '_96', bitrate: '96kbps' },
    { id: '_160', bitrate: '160kbps' },
    { id: '_320', bitrate: '320kbps' }
  ]

  const key = Buffer.from('38346591', 'utf8')
  const iv = Buffer.alloc(0)
  const decipher = createDecipheriv('des-ecb', key, iv)

  const decryptedLink = Buffer.concat([
    decipher.update(Buffer.from(encryptedMediaUrl, 'base64')),
    decipher.final()
  ]).toString('utf8')

  return qualities.map((quality) => ({
    quality: quality.bitrate,
    url: decryptedLink.replace('_96', quality.id)
  }))
}

export const createImageLinks = (link: string) => {
  if (!link) return []

  const qualities = ['50x50', '150x150', '500x500']
  const regex = /150x150|50x50/

  return qualities.map((quality) => ({
    quality,
    url: link.replace(regex, quality)
  }))
}
