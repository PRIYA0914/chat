const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mediaUrl: { type: String, required: true },
  type: { type: String, enum: ['image', 'video'], required: true },
  seenBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  privacy: { type: String, enum: ['public', 'contacts', 'private'], default: 'contacts' },
  expiresAt: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Status', StatusSchema);
