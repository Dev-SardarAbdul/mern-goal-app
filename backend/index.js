const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const goalRouter = require("./routes/goalRoutes");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Database Conneccted & Server running on port ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });

app.use("/api/goals/", goalRouter);
