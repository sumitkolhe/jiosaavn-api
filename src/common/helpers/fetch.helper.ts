export const useFetch = async <T>(type: string, params: Record<string, string | number>): Promise<T> => {
  const url = new URL('https://www.jiosaavn.com/api.php')

  url.searchParams.append('__call', type)
  url.searchParams.append('_format', 'json')
  url.searchParams.append('_marker', '0')
  url.searchParams.append('ctx', 'web6dot0')
  url.searchParams.append('api_version', '4')

  Object.keys(params).forEach((key) => url.searchParams.append(key, String(params[key])))

  const response = await fetch(url.toString())
  const data = await response.json()

  return data as T
}
