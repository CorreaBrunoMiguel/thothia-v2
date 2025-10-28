import pool from '../database/connection.js';

export const getAllBiomes = async () => {
  const { rows } = await pool.query('SELECT * FROM biomes ORDER BY id ASC');
  return rows;
};

export const getBiomeById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM biomes WHERE id = $1', [id]);
  return rows[0];
};

export const createBiome = async (biome) => {
  const { name, description, region } = biome;
  const { rows } = await pool.query(
    'INSERT INTO biomes (name, description, region) VALUES ($1, $2, $3) RETURNING *',
    [name, description, region]
  );
  return rows[0];
};

export const updateBiome = async (id, biome) => {
  const { name, description, region } = biome;
  const { rows } = await pool.query(
    'UPDATE biomes SET name=$1, description=$2, region=$3 WHERE id=$4 RETURNING *',
    [name, description, region, id]
  );
  return rows[0];
};

export const deleteBiome = async (id) => {
  const result = await pool.query('DELETE FROM biomes WHERE id = $1', [id]);
  return result.rowCount;
};
