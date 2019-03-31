const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    unique: true,
    required: true
  }
})

module.exports = mongoose.model('MyUser', userSchema);