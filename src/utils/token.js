const verifyToken = (req, res) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    res.status(401).send({
      success: false,
      response: {
        message: 'No token provided.',
      },
    });

    return true;
  }

  if (token !== process.env.secrettoken) {
    res.status(401).send({
      success: false,
      response: {
        message: 'Invalid token.',
      },
    });

    return true;
  }

  return false;
};

module.exports = verifyToken;
