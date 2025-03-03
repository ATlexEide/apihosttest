import express from "express";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import { getRoot, getLogin } from "./Handlers/GET/getHandler.js";
import { login, addUser } from "./Handlers/POST/postHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(express.urlencoded());
export const router = express.Router();
const port = 5000;

// const db = new sqlite3.Database("chinook.db", sqlite3.OPEN_READWRITE);

app.get("/", getRoot);
app.get("/user/", getLogin);

app.post("/user/create", addUser);
app.post("/user/login", login);

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`);
});
