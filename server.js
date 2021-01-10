const express = require("express");
require("dotenv").config();
const connectDB = require("./config/dbConnect");

// instance des methodes d'express
const app = express();
// connect to db
connectDB();

// routes
app.use(express.json());
app.use("/user", require("./routes/user"));

app.use("/user", require("./routes/post"));
app.use("/user", require("./routes/rdv"));

app.use("/user", require("./routes/commentaire"));

// require les variables d'environnement dans le serveur

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on ${PORT}`)
);
