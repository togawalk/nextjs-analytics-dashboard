import { config } from "@/config"
import { Redis } from "@upstash/redis"

export const redis = new Redis({
  url: config.redis.url,
  token: config.redis.token,
})
