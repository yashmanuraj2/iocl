const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = express.Router();
const path = require("path");
const UserRouter = require("./Routes/UserRouter");
const RecordRouter = require("./Routes/RecordRouter");
const uri = "process.ENV.url"
app.use(express.json());

mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );

    app.use("/", UserRouter);
    app.use("/record", RecordRouter);

  app.listen(5000, () => {
    console.log("Backend server is running!");
  });
