// Test script for generating and verifying a JWT with expiry
const encrypt = require('./script');
const jwt = require('jsonwebtoken');

const secret = 'mySuperSecretKey';
const payload = { userId: 123, name: 'Alice' };

// Generate token with 5 seconds expiry for testing
const token = encrypt(payload, secret, '5s');
console.log('Generated Token:', token);

// Wait 6 seconds and then verify the token to test expiry
setTimeout(() => {
  try {
    const decoded = jwt.verify(token, secret);
    console.log('Decoded payload:', decoded);
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      console.log('Token has expired.');
    } else {
      console.log('Token verification failed:', err.message);
    }
  }
}, 6000);
