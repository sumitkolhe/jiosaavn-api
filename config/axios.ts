import axios from 'axios'

const axiosConfig = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json, text/plain, */*',
    'Cache-Control': 'no-cache',
    Cookie:
      'B=cc86e74e9f74f1afaaeeeb4cfc647f6c; L=hindi; gdpr_acceptance=true; geo=103.82.41.209%2CIN%2CMaharashtra%2CPune%2C411032; mm_latlong=18.6161%2C73.7286; CT=MTg3MjE3OTUwOQ%3D%3D; DL=english',
  },
}

export const axiosInstance = axios.create({
  headers: axiosConfig.headers,
})
