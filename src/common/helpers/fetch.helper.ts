import { userAgents, type Endpoints } from '#common/constants'
import type { ApiContextEnum } from '#common/enums'

type EndpointValue = (typeof Endpoints)[keyof typeof Endpoints]

interface FetchParams {
  endpoint: EndpointValue
  params: Record<string, string | number>
  context?: ApiContextEnum
  /**
   * Raw Cookie header to send upstream.
   *
   * Some JioSaavn endpoints — content.getBrowseModules in particular — ignore
   * a `language` query parameter entirely and take the listener's languages
   * from an `L` cookie instead (e.g. `L=tamil` or `L=tamil,telugu`).
   */
  cookie?: string
}

interface FetchResponse<T> {
  data: T
  ok: Response['ok']
}

export const useFetch = async <T>({ endpoint, params, context, cookie }: FetchParams): Promise<FetchResponse<T>> => {
  const url = new URL('https://www.jiosaavn.com/api.php')

  url.searchParams.append('__call', endpoint.toString())
  url.searchParams.append('_format', 'json')
  url.searchParams.append('_marker', '0')
  url.searchParams.append('api_version', '4')
  url.searchParams.append('ctx', context || 'web6dot0')

  Object.keys(params).forEach((key) => url.searchParams.append(key, String(params[key])))

  const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)]

  const response = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': randomUserAgent,
      ...(cookie ? { Cookie: cookie } : {})
    }
  })

  const data = await response.json()

  return { data: data as T, ok: response.ok }
}
