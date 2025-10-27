// src/backend/routes/faunaRoutes.js
import express from 'express';
import {
  getAllFauna,
  getFaunaById,
  createFauna,
  updateFauna,
  deleteFauna,
} from '../controllers/fauna.controller.js';

const router = express.Router();

router.get('/', getAllFauna);
router.get('/:id', getFaunaById);
router.post('/', createFauna);
router.put('/:id', updateFauna);
router.delete('/:id', deleteFauna);

export default router;
