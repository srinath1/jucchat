import { io } from "socket.io-client";

const URL = 'https://jucchat.herokuapp.com/';

const socket = io(URL, {
  path: "/socket.io",
  reconnection: false,
});

export default socket;
