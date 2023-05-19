const express = require("express");
const db = require("./models");
require("dotenv").config();

const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 3000;

app.use(express.json());
app.use(cors());

app.use(require("./routes"));
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Connected....");
  });
});
