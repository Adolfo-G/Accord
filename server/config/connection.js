const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://cluster0.qpafo.mongodb.net/myFirstDatabase',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
