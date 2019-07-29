import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./src/App";

const path = require("path");
const express = require("express");
const app = express(),
  DIST_DIR = path.resolve(__dirname),
  HTML_FILE = path.join(DIST_DIR, "index.html");
app.use(express.static(DIST_DIR));
app.set("view engine", "pug");
app.get("*", (req, res) => {
  const content = ReactDOMServer.renderToString(<App />);
  res.render("index", { content });
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
