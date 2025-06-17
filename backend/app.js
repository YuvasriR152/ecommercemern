const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const app = express();
app.use(express.json());
app.use(cors());
// Hardcoded DB connection URL
const DB_URL = 'mongodb://localhost:27017/mernshop'; 

// Connect to MongoDB directly
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then((con) => {
  console.log('✅ Connected to MongoDB at host:', con.connection.host);
})
.catch((err) => {
  console.error('❌ Failed to connect to MongoDB:', err);
});

// Port number
const PORT = 8000;

// Routes
const products = require('./routes/product');
const order = require('./routes/order');
app.use('/api/v1', products);
app.use('/api/v1', order);


// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

