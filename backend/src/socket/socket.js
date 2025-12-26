const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const redisClient = require('../config/redis');

function setupSocket(server) {
  const io = new Server(server, { cors: { origin: '*' } });

  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      socket.userId = payload.userId;
      next();
    } catch (err) {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', socket => {
    // Join rooms, handle events
    require('./chat.socket')(io, socket);
    require('./typing.socket')(io, socket);
    require('./call.socket')(io, socket);
  });

  return io;
}

module.exports = setupSocket;
