import express from "express";
import * as path from "path";

import { getFile } from "./Handlers/getHandler.js";
import { login, addUser } from "./Handlers/postHandler.js";

const app = express();
app.use(express.urlencoded());
app.use(express.static(path.resolve("./") + "/public"));
export const router = express.Router();
const port = 5000;

app.get("/", getFile);
app.get("/login", getFile);
app.get("/signup", getFile);

app.post("/user/create", addUser);
app.post("/user/login", login);

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`);
});
