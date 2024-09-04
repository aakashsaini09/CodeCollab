import { io } from "socket.io-client";
export const connectSocket = async() => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket']
    };
    const backendUrl = 'https://codingbuddies-r9sf.onrender.com';
    return io(backendUrl, options); 
}