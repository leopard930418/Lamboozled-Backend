const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios").default;
const bodyParser = require("body-parser");
// const EthLFloorModel = require("./models/EthLFloor");
// const GenLFloorModel = require("./models/GenLFloor");

// Connect mongoDB
mongoose.set('strictQuery', false);
mongoose
  //.connect('mongodb+srv://timer:yr8ktb9jfamnmkxr@cluster0.q9ybv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .connect("mongodb://127.0.0.1:27017/lamboozled")
  // .connect(
  //   "mongodb+srv://kilros:Zd7WfOHrCXuStqr1@cluster0.olf1fcu.mongodb.net/EthLizards?retryWrites=true&w=majority"
  // )
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });



const registerAPI = require("./routes/register.route");
const historyAPI = require("./routes/history.route");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
const buildPath = path.join(__dirname, "..", "dist");
app.use(express.static(buildPath));
app.use(cors());

// API
// app.use("/ethLFloor", ethFloorAPI);
// app.use("/genLFloor", genFloorAPI);
// app.use("/council", councilAPI);
// app.use("/invest", investAPI);

app.use("/register", registerAPI);
app.use("/history", historyAPI);

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
// Find 404
app.use((req, res, next) => {
  next();
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.get("/", function (req, res) {
  //when we get an http get request to the root/homepage
  res.send("This is EthLizard Backend!");
});

