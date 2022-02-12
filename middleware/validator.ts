import Joi from 'joi'
import { celebrate, Segments } from 'celebrate'

const recordValidator = Joi.string().trim().length(24).alphanum().required().messages({
  'string.empty': 'Record ID name cannot be empty',
  'string.length': 'Record ID should be 24 characters long',
  'string.alphanum': 'Record ID should alpha-numeric',
})

const payloadValidator = Joi.alternatives(
  Joi.object()
    .min(1)
    .message('Empty object is not allowed.')
    .custom(payloadSizeCalculator, 'calculate size')
    .message('Payload size exceeded'),
  Joi.array()
    .min(1)
    .message('Empty array is not allowed.')
    .custom(payloadSizeCalculator, 'calculate size')
    .message('Payload size exceeded')
)

export const validators = {
  deleteRecordData: celebrate({
    [Segments.HEADERS]: apiKeyValidator,
    [Segments.PARAMS]: Joi.object().keys({
      krateId: krateValidator,
      recordId: recordValidator,
    }),
  }),
}
