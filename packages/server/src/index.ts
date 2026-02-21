import { APP_VERSION } from "@monorepo/shared";
import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(APP_VERSION);
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})