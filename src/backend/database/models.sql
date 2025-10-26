-- src/backend/database/models.sql

-- =============================
-- BIOMAS
-- =============================
CREATE TABLE IF NOT EXISTS biomes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  region VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================
-- FLORA
-- =============================
CREATE TABLE IF NOT EXISTS flora (
  id SERIAL PRIMARY KEY,
  scientific_name VARCHAR(150) NOT NULL,
  common_name VARCHAR(150),
  status VARCHAR(50),
  biome_id INT REFERENCES biomes(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================
-- FAUNA
-- =============================
CREATE TABLE IF NOT EXISTS fauna (
  id SERIAL PRIMARY KEY,
  scientific_name VARCHAR(150) NOT NULL,
  common_name VARCHAR(150),
  classification VARCHAR(100),
  status VARCHAR(50),
  biome_id INT REFERENCES biomes(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
