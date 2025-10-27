import express from 'express';

import {
  getAllBiomes,
  getBiomesById,
  createBiome,
  updateBiome,
  deleteBiome,
} from '../controllers/biome.controller.js';

const router = express.Router();

router.get('/', getAllBiomes);
router.get('/:id', getBiomesById);
router.post('/', createBiome);
router.put('/:id', updateBiome);
router.delete('/:id', deleteBiome);

export default router;
