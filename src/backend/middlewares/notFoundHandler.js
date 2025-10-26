// src/backend/middlewares/notFoundHandler.js
export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    path: req.originalUrl,
  });
};
