const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobile: { type: String, unique: true, require:true},
  password:{ type: String, require:true},
  inviteCode:{ type: String, require:true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
