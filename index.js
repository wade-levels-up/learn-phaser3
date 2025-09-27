const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Phaser Project!");
});

app.listen(port, () => {
  console.log(`Application running at http://localhost:${port}`);
});
