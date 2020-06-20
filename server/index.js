import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import { ServerStyleSheets } from "@material-ui/core/styles";
import purify from "purify-css";

const PORT = 3000;
const path = require("path");
const fs = require("fs");

// initialize the application and create the routes
const app = express();
const router = express.Router();

// root (/) should always serve our server rendered page
router.use("/", (_, res) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, "..", "build", "index.html");

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }

    // Grab the CSS from the sheets.
    const sheets = new ServerStyleSheets();

    // render the app as a string
    const html = ReactDOMServer.renderToString(sheets.collect(<App />));
    const css = sheets.toString();

    // Removes unused CSS
    const purifiedCSS = purify(html, css);

    const mapHtmlString = {
      html: `<div id="root">${html}</div>`,
      css: `<style id="jss-ssr">${purifiedCSS}</style>`,
    };

    // inject the rendered app into our html, css and send it
    htmlData = htmlData.replace(
      `<style id="jss-ssr"></style>`,
      mapHtmlString.css
    );
    htmlData = htmlData.replace(`<div id="root"></div>`, mapHtmlString.html);

    return res.send(htmlData);
  });
});

// other static resources should just be served as they are
router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

// tell the app to use the above rules
app.use(router);

// start the app
app.listen(PORT, () => {
  console.log("You are good to go");
});
