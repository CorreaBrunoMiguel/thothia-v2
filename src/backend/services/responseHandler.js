export const successResponse = (
  res,
  data,
  message = 'Operação bem-sucedida',
  status = 200
) => {
  res.status(status).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (res, error, status = 500) => {
  res.status(status).json({
    success: false,
    error: error.message || error,
  });
};
