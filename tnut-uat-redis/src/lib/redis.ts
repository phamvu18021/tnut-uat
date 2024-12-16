import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST || "10.10.51.16",
  port: Number(process.env.REDIS_PORT) || 6379
});

export default redis;
