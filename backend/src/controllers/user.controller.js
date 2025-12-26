const User = require('../models/User');
const cloudinary = require('../config/cloudinary');

exports.createProfile = async (req, res, next) => {
  try {
    const { name, about } = req.body;
    const user = await User.findById(req.user._id);
    user.name = name;
    user.about = about;
    await user.save();
    res.json({ user });
  } catch (err) { next(err); }
};

exports.updatePhoto = async (req, res, next) => {
  try {
    const result = await cloudinary.uploader.upload_stream(req.file.buffer);
    const user = await User.findById(req.user._id);
    user.photo = result.secure_url;
    await user.save();
    res.json({ photo: user.photo });
  } catch (err) { next(err); }
};

exports.online = async (req, res, next) => {
  try {
    // ...set online in Redis
    res.json({ online: true });
  } catch (err) { next(err); }
};

exports.offline = async (req, res, next) => {
  try {
    // ...set offline in Redis
    res.json({ online: false });
  } catch (err) { next(err); }
};

exports.blockUser = async (req, res, next) => {
  try {
    // ...block logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.search = async (req, res, next) => {
  try {
    // ...search logic
    res.json({ users: [] });
  } catch (err) { next(err); }
};
