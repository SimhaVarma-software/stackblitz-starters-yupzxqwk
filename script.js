const jwt = require('jsonwebtoken');

const encrypt = (payload, secret, expiresIn = '1h') => {
  // Create a JWT with expiry
  return jwt.sign(payload, secret, { expiresIn });
};

module.exports = encrypt;
