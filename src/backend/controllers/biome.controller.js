import pool from '../database/connection.js';

export const getAllBiomes = async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM biomes ORDER BY id ASC');
    res.json(rows);
  } catch (error) {
    next(error);
  }
};

export const getBiomesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM biomes WHERE id = $1', [
      id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ error: 'Bioma não encontrado' });
    res.json(rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createBiome = async (req, res, next) => {
  try {
    const { name, description, region } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO biomes (name, description, region) VALUES ($1, $2, $3) RETURNING *',
      [name, description, region]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateBiome = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, region } = req.body;
    const { rows } = await pool.query(
      'UPDATE biomes SET name=$1, description=$2, region=$3 WHERE id=$4 RETURNING *',
      [name, description, region, id]
    );
    if (rows.length === 0)
      return res.status(404).json({ error: 'Bioma não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

export const deleteBiome = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM biomes WHERE id = $1', [id]);
    if (result.rowCount === 0)
      return res.status(404).json({ error: 'Bioma não encontrado' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
