const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  phone: { type: String, unique: true, required: true, index: true },
  name: { type: String },
  about: { type: String },
  photo: { type: String },
  blocked: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  lastSeen: { type: Date },
  isOnline: { type: Boolean, default: false },
  refreshTokens: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
