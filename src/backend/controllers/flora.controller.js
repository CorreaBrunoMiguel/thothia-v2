import pool from '../database/connection.js';

export const getAllFlora = async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT f.*, b.name AS biome_name 
       FROM flora f 
       LEFT JOIN biomes b ON f.biome_id = b.id 
       ORDER BY f.id ASC`
    );
    res.json(rows);
  } catch (error) {
    next(error);
  }
};

export const getFloraById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      `SELECT f.*, b.name AS biome_name 
       FROM flora f 
       LEFT JOIN biomes b ON f.biome_id = b.id 
       WHERE f.id = $1`,
      [id]
    );
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ message: 'Espécie de flora não encontrada' });
    }
  } catch (error) {
    next(error);
  }
};

export const createFlora = async (req, res, next) => {
  try {
    const { scientific_name, common_name, status, biome_id } = req.body;
    const { rows } = await pool.query(
      `INSERT INTO flora (scientific_name, common_name, status, biome_id)
            VALUES ($1, $2, $3, $4)
            RETURNING *`,
      [scientific_name, common_name, status, biome_id]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateFlora = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { scientific_name, common_name, status, biome_id } = req.body;
    const { rows } = await pool.query(
      `UPDATE flora 
       SET scientific_name=$1, common_name=$2, status=$3, biome_id=$4
       WHERE id=$5 RETURNING *`,
      [scientific_name, common_name, status, biome_id, id]
    );
    if (rows.length === 0)
      return res.status(404).json({ error: 'Espécie de flora não encontrada' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

export const deleteFlora = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM flora WHERE id = $1', [id]);
    if (result.rowCount === 0)
      return res.status(404).json({ error: 'Espécie de flora não encontrada' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
