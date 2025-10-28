// src/backend/middlewares/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const code = err.code || (status === 404 ? 'NOT_FOUND' : 'INTERNAL_ERROR');
  const correlationId =
    req.headers['x-correlation-id'] ||
    `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  const payload = {
    success: false,
    code,
    error: err.message || 'Erro interno do servidor',
    correlationId,
  };

  if (err.details) payload.details = err.details; // ex.: issues de validação
  if (process.env.NODE_ENV === 'development' && err.stack) {
    payload.stack = err.stack;
  }

  console.error(
    `[${correlationId}] ${code} (${status}) →`,
    err.message,
    err.details ? JSON.stringify(err.details) : ''
  );

  return res.status(status).json(payload);
};
