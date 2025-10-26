import express from 'express';

import { PORT } from './config/serverConfig.js';
import router from './routes/index.js';

const app = express();

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`🌿 Thothia v2 backend running on port ${PORT}`);
});
