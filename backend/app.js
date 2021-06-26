const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

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

const homePage = require("./Routes/HomePageRoutes");
app.use("/homePage", homePage);

const researchTemplate = require("./Routes/ResearchPaperTemplateRoute");
app.use("/researchTemplate", researchTemplate);

const workshopTemplate = require("./Routes/WorkshopTemplateRoute");
app.use("/workshopTemplate", workshopTemplate);

const presentationTemplate = require("./Routes/WorkshopPresentationTemplateRoute");
app.use("/presentationTemplate", presentationTemplate);

app.use("/images", express.static("HomePageImages"));
app.use("/templateFolder", express.static("ResearchPaperTemplate"));
app.use(
  "/workShopTemplateFolder",
  express.static("WorkshopRresentationTemplate")
);
app.use("/presentationFolder", express.static("WorkshopPresentationTemplate"));

//routes for the users
const users = require("./Routes/UserRoute");
app.use("/Users", users);
const userImg = require("./Routes/UserImgs");
app.use("/uImg",userImg);

//routes for workshop
const workshops = require("./Routes/Workshop");
app.use("/Workshops", workshops);

//routes for research
const research = require("./Routes/ResearchRoute");
app.use("/researchDetails", research);

app.use("/repaper", express.static("FileStorage/ResearchPapers"));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
