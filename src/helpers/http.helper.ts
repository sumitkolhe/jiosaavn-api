import { $fetch } from 'ofetch'
import { getConfig } from '../configs'

const { baseURL } = getConfig()

export const http = $fetch.create({ baseURL })
