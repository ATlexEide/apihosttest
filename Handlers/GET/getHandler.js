import sqlite3 from "sqlite3";

export function getTest(req, res) {
  res.send("Yippie");
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
