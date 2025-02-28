const express = require("express");
const router = express.Router();

function getTest(req, res) {
  const query = `SELECT name FROM tracks WHERE trackid = 2`;

  router.get("/", (req, res) => {
    let db = new sqlLite.Database(path.resolve("chinook.db"), (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Connected to the chinook database.");
    });
    db.get(query, (err, row) => {
      db.close((err) => {
        if (err) {
          console.error(err.message);
        }
        console.log("Close the database connection.");
      });
      res.send(json(row));
    });
  });
}

module.exports = {
  getTest,
};
