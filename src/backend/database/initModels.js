// src/backend/database/initModels.js
import pool from './connection.js';
import fs from 'fs';

const sql = fs.readFileSync('src/backend/database/models.sql', 'utf8');

const initializeDatabase = async () => {
  try {
    await pool.query(sql);
    console.log('🌱 Tabelas de Biomas, Flora e Fauna criadas com sucesso.');
  } catch (error) {
    console.error('❌ Erro ao criar tabelas:', error.message);
  } finally {
    pool.end();
  }
};

initializeDatabase();
