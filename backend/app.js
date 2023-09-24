const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookroutes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://ruksanakasim:143ruksan@cluster0.wagoer7.mongodb.net/Bookstore?retryWrites=true&w=majority"  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));