const http = require('http');
const app = require('./app');
const setupSocket = require('./socket/socket');

const server = http.createServer(app);
setupSocket(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
