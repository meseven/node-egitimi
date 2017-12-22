const http = require('http');
const socketio = require('socket.io');
const server = http.createServer((req, res) => {
    res.end('hey!');
});

server.listen(3000);

const io = socketio.listen(server);
const nsp = io.of('/93creative');

nsp.on('connection', (socket) => {
    console.log('user connected');

    socket.on('isim yaz', () => {
        nsp.emit('herkese gonder', { name: 'Mehmet' });
    });
});
