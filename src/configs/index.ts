import { devConfig } from './dev.config'
import { productionConfig } from './production.config'

export const getConfig = () => {
  if (process.env.NODE_ENV === 'production') return productionConfig
  return devConfig
}
