# colinmakes.games server

This projects runs a [boardgame.io](https://boardgame.io/) server for [colinmakes.games](https://www.colinmakes.games).

## Local Development

Clone this repository, install dependencies.

```bash
npm install
```

Create a `.env.development` file in the root directory and add the following:

```txt
ORIGIN="https://localhost:3000/"
```

Run the development server.

```bash
npm run dev
```

The accompanying client-side repository can be found [here](https://github.com/tressc/colinmakes.games).

## Project structure

The server found in `index.js` is passed a configuration object which defines which games are available and which origins are white-listed.

The logic for each game is defined in the `games/` directory.
