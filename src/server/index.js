#!/usr/bin/env node

import app from "./app/index";
import http from "http";
import debug from "debug";

const debugServer = debug("app:server");

const port = process.env.APP_PORT || 3000;
app.set("port", port);

// production configuration
if (process.env.NODE_ENV == "production") {
  // gzip compression
  const compression = require("compression");
  app.use(compression());
  // static file caching
  //staticOptions = defaultConf.caching
}

// start the server
// ref:https://github.com/jamiebuilds/react-loadable#preloading-all-your-loadable-components-on-the-server
const server = http.createServer(app);

server.listen(port);
  server.on("error", onError);
  server.on("listening", onListening);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      debugServer(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      debugServer(`${bind} is already used by another program`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  debugServer(`App is listening on ${bind}`);
}
