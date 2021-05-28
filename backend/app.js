const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// const multer = require("multer");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

const url = process.env.MONGO_DB_URL;

mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to mongo DB");
});

const memberDetails = require("./Routes/CommiteeMembersRoute");
app.use("/memberDetails", memberDetails);

//routes for the users
const users = require("./Routes/User");
app.use("/Users", users);

//routes for the research details
const research = require("./Routes/ResearchRoute");
app.use("/researchDetails", research);

// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./FileStorage/ResearchPapers");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: fileStorageEngine });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
