import Joi from 'joi'
import { celebrate, Segments } from 'celebrate'

export const validators = {
  search: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      query: Joi.string().required().min(1).message('should have a minimum length of'),
    }),
  }),
}
