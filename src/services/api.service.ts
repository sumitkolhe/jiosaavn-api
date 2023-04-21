import got from 'got-cjs'
import { getConfig } from '../configs'
import type { Got } from 'got-cjs'
import type { Config } from '../interfaces/config.interface'

export class ApiService {
  private httpClient: Got
  private baseURL: Config['baseURL']
  protected endpoints: Config['endpoint']

  constructor() {
    const { baseURL, endpoint } = getConfig()
    this.baseURL = baseURL
    this.endpoints = endpoint

    this.httpClient = got.extend({
      prefixUrl: this.baseURL,
      searchParams: new URLSearchParams([
        ['_format', 'json'],
        ['_marker', '0'],
        ['ctx', 'web6dot0'],
      ]),
      responseType: 'json',
      headers: {
        cookie: 'L=english; gdpr_acceptance=true; DL=english',
      },
      hooks: {
        beforeRequest: [
          (options) => {
            // set default language in cookie
            const languageHeader = new URLSearchParams(options.searchParams as string).get('language') || 'english'

            options.headers = {
              cookie: `L=${encodeURIComponent(languageHeader)}; gdpr_acceptance=true; DL=english`,
            }
          },
        ],
      },
    })
  }

  protected http<T>(url: string, isVersion4: boolean, query?: Record<string, string | number>): Promise<T> {
    const v4 = isVersion4 ? { api_version: 4 } : undefined
    const queryParams = { ...v4, ...query }

    return this.httpClient<T>({ searchParams: { __call: url, ...queryParams } }).json()
  }
}
