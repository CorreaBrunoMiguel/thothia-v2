import express from 'express';

import {
  listBiomes,
  getBiome,
  create,
  update,
  del,
} from '../controllers/biome.controller.js';

import {
  biomeCreateSchema,
  biomeUpdateSchema,
  biomeIdParamSchema,
} from '../schemas/biome.schema.js';
import { validate } from '../middlewares/validate.js';

const router = express.Router();

router.get('/', listBiomes);
router.get('/:id', validate(biomeIdParamSchema), getBiome);
router.post('/', validate(biomeCreateSchema), create);
router.put(
  '/:id',
  validate(biomeIdParamSchema),
  validate(biomeUpdateSchema),
  update
);
router.delete('/:id', validate(biomeIdParamSchema), del);

export default router;
