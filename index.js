import express from "express";

import { getRoot, getLogin } from "./Handlers/GET/getHandler.js";
import { login, addUser } from "./Handlers/POST/postHandler.js";

const app = express();
app.use(express.urlencoded());
export const router = express.Router();
const port = 5000;

app.get("/", getRoot);
app.get("/user/", getLogin);

app.post("/user/create", addUser);
app.post("/user/login", login);

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`);
});
