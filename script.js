const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  try {
    // Create a JWT that expires in 1 hour
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    return token;
  } catch (error) {
    throw new Error('Error creating JWT: ' + error.message);
  }
};

// Function to verify and decode a token
const verifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      throw new Error('Token has expired');
    }
    throw new Error('Invalid token');
  }
};

module.exports = { encrypt, verifyToken };