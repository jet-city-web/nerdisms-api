'use strict';

// io is a global reference to the socket server on our port

const magnets = io.of('/magnets');
magnets.on('connection', (socket) => {
  socket.on('placed', (payload) => {
    socket.broadcast.emit('placed', payload);
  });
  socket.on('moving', (payload) => {
    socket.broadcast.emit('moving', payload);
  });
})