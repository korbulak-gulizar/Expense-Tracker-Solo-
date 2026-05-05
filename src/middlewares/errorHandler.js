export const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: 'An unexpected error occurred.',
    error: err.message || 'Internal Server Error',
  })
}
