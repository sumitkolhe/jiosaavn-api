import type { Endpoints } from '#common/constants'

type EndpointValue = (typeof Endpoints)[keyof typeof Endpoints]

export const useFetch = async <T>({
  endpoint,
  params,
  context
}: {
  endpoint: EndpointValue
  params: Record<string, string | number>
  context?: 'android' | 'web6dot0'
}): Promise<{ data: T; ok: Response['ok'] }> => {
  const url = new URL('https://www.jiosaavn.com/api.php')

  url.searchParams.append('__call', endpoint.toString())
  url.searchParams.append('_format', 'json')
  url.searchParams.append('_marker', '0')
  url.searchParams.append('api_version', '4')
  url.searchParams.append('ctx', context || 'web6dot0')

  Object.keys(params).forEach((key) => url.searchParams.append(key, String(params[key])))

  const response = await fetch(url.toString())
  const data = await response.json()

  return { data: data as T, ok: response.ok }
}
