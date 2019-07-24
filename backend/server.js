const express = require("express");
const app = express();
const cors = require("cors");

const dbRoutes = require("./routes/databaseAccess");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.connect(process.env.MONGODB_URI);

// This line makes the build folder publicly available.
app.use(express.static("build"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/db", dbRoutes);

app.listen(3000, () => {
  console.log("Server for React Todo App listening on port 3000!");
});
