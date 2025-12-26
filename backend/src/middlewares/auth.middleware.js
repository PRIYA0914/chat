const { verifyToken } = require('../utils/jwt');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  const payload = verifyToken(token, process.env.JWT_SECRET);
  if (!payload) return res.status(401).json({ error: 'Invalid token' });
  req.user = await User.findById(payload.userId);
  next();
};
