const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Users API"));

app.get("/:id", (req, res) => {
  res.json({ id: Number(req.params.id) });
});

app.listen(3001, () => console.log("Users Api listening on port 3001"));
