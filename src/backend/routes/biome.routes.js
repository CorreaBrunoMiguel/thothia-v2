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

/**
 * @openapi
 * /biomes:
 *   get:
 *     summary: Lista todos os biomas
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 *       500:
 *         $ref: '#/components/responses/Error'
 */
router.get('/', listBiomes);

/**
 * @openapi
 * /biomes/{id}:
 *   get:
 *     summary: Retorna detalhes de um bioma específico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 *       404:
 *         $ref: '#/components/responses/Error'
 */
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
