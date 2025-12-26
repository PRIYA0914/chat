const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  isGroup: { type: Boolean, default: false },
  name: { type: String },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  pinned: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  muted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  archived: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  deletedFor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });



module.exports = mongoose.model('Chat', ChatSchema);
