const Call = require('../models/Call');

exports.initiateCall = async (req, res, next) => {
  try {
    // ...initiate call logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.acceptCall = async (req, res, next) => {
  try {
    // ...accept call logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.rejectCall = async (req, res, next) => {
  try {
    // ...reject call logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.logCall = async (req, res, next) => {
  try {
    // ...log call logic
    res.json({ success: true });
  } catch (err) { next(err); }
};
