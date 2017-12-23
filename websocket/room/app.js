const http = require('http');
const socketio = require('socket.io');
const server = http.createServer((req, res) => {
    res.end('hey!');
});
server.listen(3000);

const io = socketio.listen(server);
io.on('connection', (socket) => {

    /*
    console.log(socket.id);

    socket.join('room 1');
    socket.join('room 2');
    socket.join('room 3', () => {
        const rooms = Object.keys(socket.rooms);
        console.log(rooms);
    });
    */

    socket.on('joinRoom', (data) => {
       socket.join(data.name, () => {
           io.to(data.name).emit('new join', { count: getOnlineCount(io, data) });
           socket.emit('log',  { message: 'Odaya girdiniz.' });
       });
    });

    socket.on('leaveRoom', (data) => {
        socket.leave(data.name, () => {
            io.to(data.name).emit('leavedRoom', { count: getOnlineCount(io, data) });
            socket.emit('socket.leaved', { message: 'Odadan ayrıldınız.' });
        });
    });
});

const getOnlineCount = (io, data) => {
    const room = io.sockets.adapter.rooms[data.name];
    return room ? room.length : 0;
};
