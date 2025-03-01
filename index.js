import express from "express";
const app = express();
export const router = express.Router();
const port = 3000;

import { getTest, dbTest } from "./Handlers/GET/getHandler.js";
import { postTest } from "./Handlers/POST/postHandler.js";

// const db = new sqlite3.Database("cchinook.db", sqlite3.OPEN_READWRITE);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/test", getTest);
app.get("/db", dbTest);
app.post("/test", postTest);

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`);
});
