const http = require("http");
const fs = require("fs");
const path = require("path");
const requestHandler = require("./function");

const todoPath = path.join(__dirname, "server.js");
const PORT = 5000;
const HOSTNAME = "localhost";

const server = http.createServer(requestHandler);
server.listen(PORT, HOSTNAME, () => {
  console.log("Server is on");
});
