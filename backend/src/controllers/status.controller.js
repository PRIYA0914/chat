const Status = require('../models/Status');

exports.uploadStatus = async (req, res, next) => {
  try {
    // ...upload status logic
    res.json({ success: true });
  } catch (err) { next(err); }
};

exports.getStatus = async (req, res, next) => {
  try {
    // ...get status logic
    res.json({ statuses: [] });
  } catch (err) { next(err); }
};

exports.deleteStatus = async (req, res, next) => {
  try {
    // ...delete status logic
    res.json({ success: true });
  } catch (err) { next(err); }
};
