const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000;

//ROOT
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//Static
app.use(express.static(__dirname + "/static"));

//SOCKET.IO
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
