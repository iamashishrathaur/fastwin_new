const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  mobile: { type: String, unique: true, index: { unique: true, collation: { locale: 'en', strength: 2 } } },
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
