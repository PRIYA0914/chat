const mongoose = require('mongoose');

const CallSchema = new mongoose.Schema({
  caller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['audio', 'video'], required: true },
  status: { type: String, enum: ['missed', 'accepted', 'rejected'], default: 'missed' },
  duration: { type: Number },
  startedAt: { type: Date },
  endedAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Call', CallSchema);
