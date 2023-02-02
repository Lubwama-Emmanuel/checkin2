const express = require("express");

const app = express();

app.listen(4001, () => {
  console.log(`-- server running on port: ${4001}`);
});

app.get("/", (req, res) => {
  res.json("App is up and running...");
});
