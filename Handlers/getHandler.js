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

export function dbTest(req, res) {
  const sql = `SELECT trackid FROM tracks ORDER BY trackid desc AND trackid LIMIT 2`;
  const db = new sqlite3.Database("chinook.db", sqlite3.OPEN_READWRITE);
  db.all(sql, async (err, rows) => {
    console.log(rows);
    res.send(rows);
  });
  db.close();
}
