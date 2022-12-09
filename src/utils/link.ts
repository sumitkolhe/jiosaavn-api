// create download links for different bitrates
export const createDownloadLinks = (link?: string) => {
  if (!link) return false

  const qualities = [
    { id: '_12', bitrate: '12kbps' },
    { id: '_48', bitrate: '48kbps' },
    { id: '_96', bitrate: '96kbps' },
    { id: '_160', bitrate: '160kbps' },
    { id: '_320', bitrate: '320kbps' },
  ]

  const links =
    qualities.map((quality) => ({
      quality: quality.bitrate,
      link: link.replace('preview.saavncdn.com', 'aac.saavncdn.com').replace('_96_p', quality.id),
    })) || false

  return links
}

// create image links for different resolutions
export const createImageLinks = (link?: string) => {
  if (!link) return false

  const qualities = ['50x50', '150x150', '500x500']

  return (
    qualities.map((quality) => ({
      quality,
      link: link.includes('150x150') ? link.replace('150x150', quality) : link.replace('50x50', quality),
    })) || false
  )
}

// sanitize lyrics using sentence case
export const sanitizeLyrics = (lyrics: string) =>
  lyrics
    .replace(/"/gi, "'")
    .replace(/ {2}/gi, ' ')
    .split('<br>')
    .map((text) => {
      const firstLetter = text.slice(0, 1)
      return firstLetter.toUpperCase() + text.slice(1)
    })
    .join(' ')
