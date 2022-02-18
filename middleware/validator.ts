import Joi from 'joi'
import { celebrate, Segments } from 'celebrate'

export const validators = {
  searchAll: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      query: Joi.string().required().min(1),
    }),
  }),
  searchSpecific: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      query: Joi.string().required().min(1),
      page: Joi.string(),
      limit: Joi.string(),
    }),
  }),
}
