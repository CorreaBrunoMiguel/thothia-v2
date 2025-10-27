import express from 'express';

import { getStatus } from '../controllers/baseController.js';
import biomeRoutes from './biome.routes.js';

const router = express.Router();

router.get('/', getStatus);
router.use('/biomes', biomeRoutes);

export default router;
