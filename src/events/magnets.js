'use strict';

// io is a global reference to the socket server on our port

const magnets = io.of('/magnets');
magnets.on('connection', (socket) => {
  console.log('We got a live one ...', socket.id);
  socket.on('move', (payload) => {
    magnets.emit('move', payload);
  })
})