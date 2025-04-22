const { encrypt, verifyToken } = require('./script.js');

// Test data
const payload = {
  userId: '123',
  username: 'testuser'
};
const secret = 'your-secret-key';

// Test JWT creation
console.log('Creating JWT...');
const token = encrypt(payload, secret);
console.log('Generated Token:', token);

// Test JWT verification
console.log('\nVerifying token...');
try {
  const decoded = verifyToken(token, secret);
  console.log('Decoded payload:', decoded);
} catch (error) {
  console.error('Verification failed:', error.message);
}

// Test expired token (simulation)
console.log('\nTesting expired token...');
const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1MTYyMzkwMjN9.1234567890';
try {
  verifyToken(expiredToken, secret);
} catch (error) {
  console.log('Expected error:', error.message);
}