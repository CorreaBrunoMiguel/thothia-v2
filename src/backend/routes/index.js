import express from 'express';

import { getStatus } from '../controllers/baseController.js';
import biomeRoutes from './biome.routes.js';
import floraRoutes from './flora.routes.js';

const router = express.Router();

router.get('/', getStatus);
router.use('/biomes', biomeRoutes);
router.use('/flora', floraRoutes);

export default router;
