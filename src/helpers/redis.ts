import * as Redis from "redis";

export const client = Redis.createClient({
  url: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
  database: Number(process.env.REDIS_BESTARZ_DATABASE || 9),
});

export const getString = async (key: string) => client.get(key);

export const setString = async (key: string, value: string) =>
  client.set(key, value);

export const setStringWithTTL = async (
  key: string,
  value: string,
  ttl = 86400
) => client.setEx(key, ttl, value);

export const remove = async (key: string) => client.del(key);

export const cleanDB = async () => client.flushDb();
