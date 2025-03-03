import express from "express";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
export const router = express.Router();
const port = 5000;

import { getTest, dbTest } from "./Handlers/GET/getHandler.js";
import { postTest } from "./Handlers/POST/postHandler.js";

// const db = new sqlite3.Database("cchinook.db", sqlite3.OPEN_READWRITE);

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };

  const fileName = "index.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});
app.get("/test", getTest);
app.get("/db", dbTest);
app.post("/test", postTest);

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`);
});
