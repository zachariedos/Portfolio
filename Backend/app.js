//dépendances
const express = require("express");
const mongoose = require("mongoose");
const connectmongoose = require("./privacy/mongoose_connection");
const experiencesRoutes = require("./routes/experiences");
const sitesRoutes = require("./routes/sites");

//MongoDB

const mongodbUsername = connectmongoose.username;
const mongodbPassword = connectmongoose.password;
mongoose
  .connect(
    `mongodb+srv://${mongodbUsername}:${mongodbPassword}@cluster0.vqxfw6s.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.use("/", experiencesRoutes);
app.use("/portfolio", sitesRoutes);

module.exports = app;
