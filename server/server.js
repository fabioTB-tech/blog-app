const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
require("./config/cloudinary");
const { MONGO_URI, PORT } = process.env;

const app = express();

// Configs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error(err));

// Importing the routes
const userRoute = require("./routes/userRouter");
const postRoute = require("./routes/postRouter");

app.use("/api/auth", userRoute);
app.use("/api/blog", postRoute);

app.listen(PORT, () =>
  console.log(`Server running in: http://localhost:${PORT}/`),
);
