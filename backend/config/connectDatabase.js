const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/mernshop'; 

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


