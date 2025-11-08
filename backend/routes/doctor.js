
const express = require('express');
const router = express.Router();

// Get all patient records (for doctor dashboard)
router.get('/patients', async (req, res) => {
  try {
    // Mock data
    res.json({ patients: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get specific patient record
router.get('/patients/:id', async (req, res) => {
  try {
    // Mock data
    res.json({ patient: { id: req.params.id, records: [] } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
