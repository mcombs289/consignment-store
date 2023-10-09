import express from "express";
import bodyParser from "body-parser";
import mongoose, { connect } from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
const app = express();

//every rout inside of the posts is going to start with /posts
app.use("/posts", postRoutes);

//body parser to properly send requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://mcombs289:Luna1901220@cluster0.fp5nzvg.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
