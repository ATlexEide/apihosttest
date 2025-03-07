import sqlite3 from "sqlite3";
import * as path from "path";

export function postTest(req, res) {
  console.log("submitted");
  console.log(req.body);
  res.send(req.body);
  // res.send("youve hit post");
}
export function addUser(req, res) {
  console.log(req.body);
  console.log("name: ", req.body.firstname + " " + req.body.lastname);
  console.log("phone: ", req.body.phone);
  console.log("email: ", req.body.email);
  const sql = `INSERT INTO users(isOrganizer,first_name,last_name,birthday,country_code,phone,email,pw_hash) VALUES (0,"${req.body.firstname}","${req.body.lastname}","31-03-2002","NO",${req.body.phone},"${req.body.email}","hashforpw");`;
  const db = new sqlite3.Database("conventionTest.db", sqlite3.OPEN_READWRITE);
  db.all(sql, async (err, rows) => {
    if (err) console.log(err);
    console.log(rows);
    res.send("Done");
  });
  db.close();
}

export function login(req, res) {
  console.log(req.body);

  const sql = `SELECT pw_hash FROM users WHERE email = "${req.body.email}"`;
  const db = new sqlite3.Database("conventionTest.db", sqlite3.OPEN_READWRITE);
  db.all(sql, async (err, rows) => {
    if (err) console.log(err);
    console.log("provided pw: ", req.body.password);
    console.log("actual pw: ", rows[0].pw_hash);
    if (req.body.password !== rows[0].pw_hash) res.send("Access Denied");
    if (req.body.password === rows[0].pw_hash) res.send("Access Granted");
  });
  db.close();
}
