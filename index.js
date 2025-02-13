const { Server, Origins } = require("boardgame.io/server");
const { TicTacToe } = require("./games/tictactoe.ts");

const server = Server({
  games: [TicTacToe],
  origins: [process.env.ORIGIN],
  apiOrigins: [process.env.ORIGIN],
});

server.run(process.env.PORT || 8000);
