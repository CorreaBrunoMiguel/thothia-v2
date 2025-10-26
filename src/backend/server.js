import express from 'express';

import { CONFIG } from './config/serverConfig.js';

import router from './routes/index.js';
import pool from './database/connection.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use('/', router);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(CONFIG.port, async () => {
  console.log(
    `🌿 Thothia v2 backend running on port ${CONFIG.port} [${CONFIG.env}]`
  );

  try {
    await pool.query('SELECT NOW()');
    console.log('🧩 Database connection test passed ✅');
  } catch (error) {
    console.error('⚠️ Database connection failed:', error.message);
  }
});
