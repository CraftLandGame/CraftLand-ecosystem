import { Server } from "socket.io";

const io = new Server(3000);

io.on("connection", socket => {
  console.log("Player Connected");

  socket.on("move", data => {
    socket.broadcast.emit(
      "playerMove",
      data
    );
  });

  socket.on("disconnect", () => {
    console.log("Player Left");
  });
});
