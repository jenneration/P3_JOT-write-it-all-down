const express = require("express");
var cors = require('cors');
const mongoose = require("mongoose");
//const routes = require("./routes");
const userRoutes = require("./routes/users");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use("/api", userRoutes);


// Connect to the Mongo DB

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/jamm",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
