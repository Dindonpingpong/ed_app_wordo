import io from "socket.io-client";

export const socket = io('http://localhost:5001/socket', {
    'multiplex': false, transports: ['websocket'], forceNew: true
  });
