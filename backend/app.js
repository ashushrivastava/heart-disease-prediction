const express = require('express');
const cors = require('cors');
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');
const authRoutes = require('./routes/auth');
const patientRoutes = require('./routes/patient');
const doctorRoutes = require('./routes/doctor');

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/patient', ClerkExpressRequireAuth(), patientRoutes);
app.use('/api/doctor', ClerkExpressRequireAuth(), doctorRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
