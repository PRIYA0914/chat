const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateAccessToken, generateRefreshToken } = require('../utils/jwt');
const { generateOTP, sendOTP } = require('../utils/otp');

exports.signup = async (req, res, next) => {
  try {
    const { phone } = req.body;
    let user = await User.findOne({ phone });
    if (user) return res.status(400).json({ error: 'User exists' });
    user = new User({ phone });
    await user.save();
    const otp = generateOTP();
    await sendOTP(phone, otp); // phone is email for demo
    user.otp = otp;
    await user.save();
    res.json({ user: { id: user._id, phone: user.phone } });
  } catch (err) { next(err); }
};

exports.verifyOtp = async (req, res, next) => {
  try {
    const { phone, otp } = req.body;
    const user = await User.findOne({ phone });
    if (!user || user.otp !== otp) return res.status(400).json({ error: 'Invalid OTP' });
    user.otp = null;
    await user.save();
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);
    user.refreshTokens.push(refreshToken);
    await user.save();
    res.json({ user: { id: user._id, phone: user.phone }, accessToken, refreshToken });
  } catch (err) { next(err); }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    // ...validate and rotate refresh token
    res.json({ accessToken: 'newAccessToken', refreshToken: 'newRefreshToken' });
  } catch (err) { next(err); }
};

exports.logout = async (req, res, next) => {
  try {
    // ...remove refresh token(s)
    res.json({ success: true });
  } catch (err) { next(err); }
};
