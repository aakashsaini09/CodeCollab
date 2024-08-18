import { Server } from 'socket.io'
import express from 'express'
import http from 'http'
const app = express()
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('connected', socket.id);
})



const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> console.log(`listening on port ${PORT}`))