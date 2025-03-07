import sqlite3 from "sqlite3";
import * as path from "path";

export function getFile(req, res) {
  console.log(req.url);
  const file = req.url === "/" ? "index" : req.url;
  const options = {
    root: path.resolve("./"),
  };

  const fileName = `${file}.html`;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName);
    }
  });
}
