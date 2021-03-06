require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
});

requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3001);
