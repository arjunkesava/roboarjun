import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

const PORT = 3000;
const path = require("path");
const fs = require("fs");

// initialize the application and create the routes
const app = express();
const router = express.Router();

// root (/) should always serve our server rendered page
router.use("*", (req, res, next) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, "..", "build", "index.html");

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }

    // render the app as a string
    const html = ReactDOMServer.renderToString(<App />);

    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

// other static resources should just be served as they are
router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

// tell the app to use the above rules
app.use(router);

// start the app
app.listen(PORT, (error) => {
  console.log("you have an errir", error);
});
