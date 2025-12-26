const updateLastSeen = async (userModel, userId) => {
  await userModel.findByIdAndUpdate(userId, { lastSeen: new Date(), isOnline: false });
};

module.exports = { updateLastSeen };
