const errorHandler = async (err, req, res, next) => {
  if (err) {
    console.error(err.stack || err.message || err);
    res.status(500).json({ message: err.message || 'Internal Server Error' });
  } else {
    next();
  }
};

export { errorHandler };
