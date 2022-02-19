export const createDownloadLinks = (link: string) => {
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

export const createImageLinks = (link: string) => {
  if (!link) return false

  const qualities = ['50x50', '150x150', '500x500']

  return (
    qualities.map((quality) => ({
      quality,
      link: link.replace('150x150', quality),
    })) || false
  )
}
