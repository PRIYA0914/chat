const Message = require('../models/Message');
const Chat = require('../models/Chat');

exports.sendMessage = async (req, res, next) => {
  try {
    const { chatId, type, content, mediaUrl, replyTo } = req.body;
    const message = new Message({
      chat: chatId,
      sender: req.user._id,
      type,
      content,
      mediaUrl,
      replyTo,
    });
    await message.save();
    // Emit socket event here
    res.json({ message });
  } catch (err) { next(err); }
};

exports.getMessages = async (req, res, next) => {
  try {
    const { chatId, page = 1 } = req.query;
    const messages = await Message.find({ chat: chatId })
      .sort({ createdAt: -1 })
      .skip((page - 1) * 20)
      .limit(20);
    res.json({ messages });
  } catch (err) { next(err); }
};

exports.editMessage = async (req, res, next) => {
  try {
    // ...edit logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.deleteMessage = async (req, res, next) => {
  try {
    // ...delete logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.reactMessage = async (req, res, next) => {
  try {
    // ...reaction logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.seenMessage = async (req, res, next) => {
  try {
    // ...seen logic
    res.json({ success: true });
  } catch (err) { next(err); }
};
