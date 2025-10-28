// src/backend/server.js
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swaggerConfig.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorHandler);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () =>
  console.log(`🌍 Thothia API rodando em http://localhost:${PORT}`)
);
