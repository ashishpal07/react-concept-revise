import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });

ws.on("connection", (socket) => {
  console.log("New client connected");

  socket.send("Hello, client!");

  socket.on("message", (e) => {
    socket.send(e.toString());
  })
})
