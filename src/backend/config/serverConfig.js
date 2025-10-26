// src/backend/config/serverConfig.js
import dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3333,
  database: process.env.DATABASE_URL || null,
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
};
