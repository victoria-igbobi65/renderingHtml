//const { fineStructureDependencies } = require("mathjs")
const fs = require("fs");
const path = require("path");
const htmlFile = path.join(__dirname, "./about.Html");
const contact = path.join(__dirname, "./contact.html");

module.exports = function requestHandler(req, res) {
  if (req.url === "/home") {
    fs.readFile(htmlFile, null, (err, data) => {
      if (err) {
        res.end("error");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  if (req.url === "/contact") {
    fs.readFile(contact, null, (err, data) => {
      if (err) {
        res.end("error");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
};
