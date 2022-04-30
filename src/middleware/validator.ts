import Joi from 'joi'
import { Segments, celebrate } from 'celebrate'

const encodeQuery = (query: string) => encodeURIComponent(query)

export const validators = {
  searchAll: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      query: Joi.string().trim().custom(encodeQuery, 'encode-query').required().min(1),
    }),
  }),
  searchSpecific: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      query: Joi.string().trim().custom(encodeQuery, 'encode-query').required().min(1),
      page: Joi.string().trim(),
      limit: Joi.string().trim(),
    }),
  }),
  details: celebrate({
    [Segments.QUERY]: Joi.object()
      .keys({
        id: Joi.string().trim(),
        link: Joi.string().trim(),
      })
      .or('id', 'link'),
  }),
}
