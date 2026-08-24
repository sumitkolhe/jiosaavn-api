import { userAgents, type Endpoints } from '#common/constants'
import { HTTPException } from 'hono/http-exception'
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
  status: number
}

/**
 * Turns an upstream failure into a real HTTP error instead of letting it reach
 * a use-case as an unusable body.
 *
 * Most use-cases destructured only `data` and carried on, so a JioSaavn 403
 * surfaced as `404 song not found` on some routes and as a cheerful
 * `200 {"results": []}` on others. Both are lies, and the empty-200 is the
 * worse of the two: it is indistinguishable from a genuine no-results answer,
 * and — now that responses are cached — it would be stored and served back for
 * the whole TTL, and would stop `stale-if-error` falling back to the last good
 * response.
 */
const assertUpstreamOk = (status: number, ok: boolean) => {
  if (ok) return

  if (status === 403 || status === 429) {
    throw new HTTPException(503, { message: 'upstream is rate limiting this request' })
  }

  throw new HTTPException(502, { message: `upstream responded with ${status}` })
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

  assertUpstreamOk(response.status, response.ok)

  let data: unknown
  try {
    data = await response.json()
  } catch {
    // A 200 carrying HTML — usually a block page or an outage notice.
    throw new HTTPException(502, { message: 'upstream returned a malformed response' })
  }

  return { data: data as T, ok: response.ok, status: response.status }
}
