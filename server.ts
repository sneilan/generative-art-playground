import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import path from 'path';
import chokidar from 'chokidar';

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

const PORT = 3000;

app.use(express.static(path.join(__dirname, '.')));

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  chokidar.watch(path.join(__dirname, 'index.html')).on('change', () => {
    console.log('index.html changed. Reloading clients...');
    socket.emit('reload');
  });

  chokidar.watch(path.join(__dirname, 'test.css')).on('change', () => {
    console.log('test.css changed. Reloading clients...');
    socket.emit('reload');
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

