import sqlite3 from "sqlite3";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function getRoot(req, res) {
  console.log(__dirname);
  const options = {
    root: path.resolve("./"),
  };

  const fileName = "index.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName);
    }
  });
}

export function getLogin(req, res) {
  const options = {
    root: path.join(__dirname),
  };
  const fileName = "/login.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName);
    }
  });
  res.send("Yippie login");
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
