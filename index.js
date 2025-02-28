const express = require("express");
const { test } = require("./Handlers/GET/getHandler");
const { test } = require("./Handlers/POST/posttHandler");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/test", test);
app.post("/test", test);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
