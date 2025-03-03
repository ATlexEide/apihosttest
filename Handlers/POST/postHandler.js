export function postTest(req, res) {
  console.log("submitted");
  console.log(req.body.json());
  // res.send("youve hit post");
}
export function addUser(req, res) {
  console.log(req);
  const sql = `INSERT INTO users(isOrganizer,first_name,last_name,birthday,country_code,phone,email,pw_hash) VALUES (0,"Alexander","Larsen","31-03-2002","NO",12345678,"testmail2@mail.no","hashforpw");`;
  const db = new sqlite3.Database("conventionTest.db", sqlite3.OPEN_READWRITE);
  db.all(sql, async (err, rows) => {
    console.log(rows);
    res.send(rows);
  });
  db.close();
}
