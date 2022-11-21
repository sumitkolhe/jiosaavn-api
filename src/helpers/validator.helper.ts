import { Joi, Modes, Segments, celebrate } from 'celebrate'

export const searchSchema = celebrate(
  {
    [Segments.QUERY]: Joi.object().keys({
      query: Joi.string().required(),
      page: Joi.string().default(1),
      limit: Joi.string().default(10),
    }),
  },
  { abortEarly: false },
  { mode: Modes.FULL }
)
