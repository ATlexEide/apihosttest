const express = require("express");
const { getTest } = require("./Handlers/GET/getHandler");
const { postTest } = require("./Handlers/POST/postHandler");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/test", getTest);
app.post("/test", postTest);

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`);
});
