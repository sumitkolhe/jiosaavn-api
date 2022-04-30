import type { Request } from 'express'

type IdentifierType = 'song' | 'album'

export class Utils {
  // create download links for different bitrates
  public static createDownloadLinks = (link: string) => {
    if (!link) return false

    const qualities = [
      { id: '_12', bitrate: '12kbps' },
      { id: '_48', bitrate: '48kbps' },
      { id: '_96', bitrate: '96kbps' },
      { id: '_160', bitrate: '160kbps' },
      { id: '_320', bitrate: '320kbps' },
    ]

    return (
      qualities.map((quality) => ({
        quality: quality.bitrate,
        link: link.replace('preview.saavncdn.com', 'aac.saavncdn.com').replace('_96_p', quality.id),
      })) || false
    )
  }

  // create image links for different resolutions
  public static createImageLinks = (link: string) => {
    if (!link) return false

    const qualities = ['50x50', '150x150', '500x500']

    return (
      qualities.map((quality) => ({
        quality,
        link: link.replace('150x150', quality),
      })) || false
    )
  }

  // capitalize first letter
  private static sentenceCase = (text: string) => {
    const firstLetter = text.slice(0, 1)
    return firstLetter.toUpperCase() + text.slice(1)
  }

  // sanitize lyrics using sentence case
  public static sanitizeLyrics = (lyrics: string) =>
    lyrics
      .replace(/"/gi, "'")
      .replace(/ {2}/gi, ' ')
      .split('<br>')
      .map((text) => Utils.sentenceCase(text))
      .join('<br>')

  // create identifier object for checking if id or link is provided in query params
  public static createIdentifier = (req: Request, identifierType: IdentifierType) => {
    const { id, link } = req.query

    const identifier = {
      type: id ? 'id' : 'link',
      value: (id as string) || Utils.extractIdFromLink(link as string, identifierType),
    }
    return identifier
  }

  // extract token id from a song or album link
  public static extractIdFromLink = (link: string, identifierType: IdentifierType): string => {
    if (link.includes(`jiosaavn.com/${identifierType}/`)) {
      return link.split(`${identifierType}/`)[1].split('/')[1].slice(0, 11)
    }
    return ''
  }
}
