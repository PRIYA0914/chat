module.exports = (io, socket) => {
  socket.on('typing:start', chatId => {
    io.to(chatId).emit('typing:start', chatId);
  });
  socket.on('typing:stop', chatId => {
    io.to(chatId).emit('typing:stop', chatId);
  });
};
