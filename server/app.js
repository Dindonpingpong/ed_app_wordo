const httpServer = require('http').createServer();

const io = require('socket.io')(httpServer);

require('./socket')(io);

httpServer.listen(5001, () => console.log('Socket on ' + 5001));