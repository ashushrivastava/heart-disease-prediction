require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config');
const { loadModel } = require('./ml/model');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();
    await loadModel();
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
