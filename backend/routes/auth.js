
const express = require('express');
const router = express.Router();

// Mock authentication
router.post('/register', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    // Mock user creation
    res.json({ message: 'User registered successfully', userId: 'mock-user-id' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Mock login
    res.json({ token: 'mock-jwt-token', role: 'patient' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
