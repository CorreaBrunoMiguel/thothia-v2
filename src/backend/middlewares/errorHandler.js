// src/backend/middlewares/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  console.error('❌ Erro interno:', err.message);

  res.status(err.status || 500).json({
    error: err.message || 'Erro interno do servidor',
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};
