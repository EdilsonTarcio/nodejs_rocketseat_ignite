const express = require('express');
const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Iniciando projeto Node - Express!"});
})

app.listen(3333);