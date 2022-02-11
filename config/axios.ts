import axios from 'axios'
import { userAgents } from '@data/useragents'

const axiosConfig = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json, text/plain, */*',
    'Cache-Control': 'no-cache',
    'User-Agent': userAgents[Math.floor(Math.random() * 30) + 1],
  },
}

export const axiosInstance = axios.create({
  headers: axiosConfig.headers,
})
