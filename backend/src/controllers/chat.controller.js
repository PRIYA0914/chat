const Chat = require('../models/Chat');
const User = require('../models/User');

exports.createChat = async (req, res, next) => {
  try {
    const { members } = req.body;
    // Prevent duplicate 1-1 chat
    let chat = await Chat.findOne({ isGroup: false, members: { $all: members, $size: 2 } });
    if (chat) return res.status(400).json({ error: 'Chat exists' });
    chat = new Chat({ members });
    await chat.save();
    res.json({ chat });
  } catch (err) { next(err); }
};

exports.createGroup = async (req, res, next) => {
  try {
    const { name, members, admins } = req.body;
    const chat = new Chat({ isGroup: true, name, members, admins });
    await chat.save();
    res.json({ chat });
  } catch (err) { next(err); }
};

exports.addMember = async (req, res, next) => {
  try {
    // ...add member logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.removeMember = async (req, res, next) => {
  try {
    // ...remove member logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.pinChat = async (req, res, next) => {
  try {
    // ...pin logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.muteChat = async (req, res, next) => {
  try {
    // ...mute logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.archiveChat = async (req, res, next) => {
  try {
    // ...archive logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.deleteChat = async (req, res, next) => {
  try {
    // ...soft delete logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.clearHistory = async (req, res, next) => {
  try {
    // ...clear history logic
    res.json({ success: true });
  } catch (err) { next(err); }
};
