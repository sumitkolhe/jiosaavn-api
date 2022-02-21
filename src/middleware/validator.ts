import Joi from 'joi'
import { celebrate, Segments } from 'celebrate'

export const validators = {
  searchAll: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      query: Joi.string().trim().required().min(1),
    }),
  }),
  searchSpecific: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      query: Joi.string().trim().required().min(1),
      page: Joi.string().trim(),
      limit: Joi.string().trim(),
    }),
  }),
  details: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      id: Joi.string().trim().required().min(1),
    }),
  }),
}
