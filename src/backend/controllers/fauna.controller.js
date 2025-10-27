// src/backend/controllers/faunaController.js
import pool from '../database/connection.js';

export const getAllFauna = async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT f.*, b.name AS biome_name 
       FROM fauna f 
       LEFT JOIN biomes b ON f.biome_id = b.id 
       ORDER BY f.id ASC`
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
};

export const getFaunaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      `SELECT f.*, b.name AS biome_name 
       FROM fauna f 
       LEFT JOIN biomes b ON f.biome_id = b.id 
       WHERE f.id = $1`,
      [id]
    );
    if (rows.length === 0)
      return res.status(404).json({ error: 'Espécie de fauna não encontrada' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

export const createFauna = async (req, res, next) => {
  try {
    const { scientific_name, common_name, classification, status, biome_id } =
      req.body;
    const { rows } = await pool.query(
      `INSERT INTO fauna (scientific_name, common_name, classification, status, biome_id)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [scientific_name, common_name, classification, status, biome_id]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
};

export const updateFauna = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { scientific_name, common_name, classification, status, biome_id } =
      req.body;
    const { rows } = await pool.query(
      `UPDATE fauna 
       SET scientific_name=$1, common_name=$2, classification=$3, status=$4, biome_id=$5 
       WHERE id=$6 RETURNING *`,
      [scientific_name, common_name, classification, status, biome_id, id]
    );
    if (rows.length === 0)
      return res.status(404).json({ error: 'Espécie de fauna não encontrada' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

export const deleteFauna = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM fauna WHERE id = $1', [id]);
    if (result.rowCount === 0)
      return res.status(404).json({ error: 'Espécie de fauna não encontrada' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
