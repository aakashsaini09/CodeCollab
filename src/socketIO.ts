import { io } from "socket.io-client";
export const connectSocket = async() => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket']
    };
    const backendUrl = process.env.BACKEND_URL || '';
    return io(backendUrl, options);
}