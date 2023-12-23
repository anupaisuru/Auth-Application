const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

//import routes
const userRoutes = require("./routes/userRoutes");

//routes
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`app is running on ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });
