import express from 'express';

import {
  listBiomes,
  getBiome,
  create,
  update,
  del,
} from '../controllers/biome.controller.js';

const router = express.Router();

router.get('/', listBiomes);
router.get('/:id', getBiome);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', del);

export default router;
