import {
  getAllBiomes,
  getBiomeById,
  createBiome,
  updateBiome,
  deleteBiome,
} from '../services/biome.service.js';
import { successResponse, errorResponse } from '../services/responseHandler.js';

export const listBiomes = async (_, res) => {
  try {
    const biomes = await getAllBiomes();
    successResponse(res, biomes, 'Biomas recuperados com sucesso');
  } catch (error) {
    errorResponse(res, error, 500);
  }
};

export const getBiome = async (req, res) => {
  try {
    const biome = await getBiomeById(req.params.id);
    !biome
      ? errorResponse(res, 'Bioma não encontrado', 404)
      : successResponse(res, biome, 'Bioma recuperado com sucesso');
  } catch (error) {
    errorResponse(res, error, 500);
  }
};

export const create = async (req, res) => {
  try {
    const biomeData = req.body;
    const biome = await createBiome(biomeData);
    successResponse(res, biome, 'Bioma criado com sucesso');
  } catch (error) {
    errorResponse(res, error, 500);
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const biomeData = req.body;
    const biome = await updateBiome(id, biomeData);
    successResponse(res, biome, 'Bioma atualizado com sucesso');
  } catch (err) {
    errorResponse(res, err, 500);
  }
};

export const del = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteBiome(id);
    successResponse(res, null, 'Bioma deletado com sucesso');
  } catch (err) {
    errorResponse(res, err, 500);
  }
};
