const { Server, Origins } = require("boardgame.io/server");
const { TicTacToe } = require("./games/tictactoe.ts");

const server = Server({
  games: [TicTacToe],
  origins: [Origins.LOCALHOST],
});

server.run(process.env.PORT || 8000);
