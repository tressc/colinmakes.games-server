const { Server } = require("boardgame.io/server");
const { Setto } = require("./games/setto.ts");

const server = Server({
  games: [Setto],
  origins: [process.env.ORIGIN || "http://localhost:3000"],
  apiOrigins: [process.env.ORIGIN || "http://localhost:3000"],
});

server.run(process.env.PORT || 8000);
