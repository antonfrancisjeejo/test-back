const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("It is working");
});

app.get("/:name", (req, res) => {
  res.send("Directly from node server "+req.params.name);
});

app.listen(process.env.PORT || 5000);

module.exports = app;
