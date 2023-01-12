const express = require("express");
const path = require("path");

const app = express();

const staticPath = path.resolve(__dirname, "client");

app.use("/", express.static(staticPath));

const indexPath = path.resolve(staticPath, "index.html");

app.get("*", (req, res) => {
  res.sendFile(indexPath);
});

module.exports = app;
