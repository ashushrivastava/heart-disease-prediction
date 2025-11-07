
const express = require('express');
const router = express.Router();
const { predictHeartDisease } = require('../ml/model');

// Submit health data and get prediction
router.post('/submit', async (req, res) => {
  try {
    const healthData = req.body;
    const prediction = await predictHeartDisease(healthData);
    
    // Save to database (mock)
    res.json({ 
      success: true,
      prediction,
      recordId: 'mock-record-id'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get patient's health records
router.get('/records', async (req, res) => {
  try {
    // Mock data
    res.json({ records: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
