const http = require('http');
const socketio = require('socket.io');
const server = http.createServer((req, res) => {
    res.end('hey!');
});
server.listen(3000);

const io = socketio.listen(server);
io.on('connection', (socket) => {
    socket.on('joinRoom', (data) => {
       socket.join(data.name, () => {
           let count = io.sockets.adapter.rooms[data.name].length;
           io.to(data.name).emit('new join', { count });
           socket.emit('log',  { message: 'Odaya girdiniz.' });
       });
    });
});
