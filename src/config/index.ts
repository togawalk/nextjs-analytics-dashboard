import Joi from 'joi'

const envSchema = Joi.object({
  UPSTASH_REDIS_REST_URL: Joi.string().required(),
  UPSTASH_REDIS_REST_TOKEN: Joi.string().required(),
}).unknown(true);

const { value: env, error } = envSchema.validate(process.env, { abortEarly: false });

if (error) {
  const errorMessages = error.details.map((detail) => detail.message).join('\n');
  throw new Error(`Config validation errors:\n${errorMessages}`);
}

export const config = {
  redis: {
    url: env.UPSTASH_REDIS_REST_URL,
    token: env.UPSTASH_REDIS_REST_TOKEN,
  },
};
