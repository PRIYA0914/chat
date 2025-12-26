module.exports = (io, socket) => {
  socket.on('call:incoming', data => {
    io.to(data.chatId).emit('call:incoming', data);
  });
  socket.on('call:accept', data => {
    io.to(data.chatId).emit('call:accept', data);
  });
  socket.on('call:reject', data => {
    io.to(data.chatId).emit('call:reject', data);
  });
};
