module.exports = (io, socket) => {
  socket.on('message:send', data => {
    // Save message, emit to room
    io.to(data.chatId).emit('message:receive', data);
  });
  socket.on('message:seen', data => {
    io.to(data.chatId).emit('message:seen', data);
  });
  socket.on('user:online', userId => {
    io.emit('user:online', userId);
  });
  socket.on('user:offline', userId => {
    io.emit('user:offline', userId);
  });
};
