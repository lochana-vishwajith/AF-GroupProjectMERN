const express = require("express");
const router = express.Router();
const HomePageRoute = require("../Models/HomePageModel");
const multer = require("multer");
const path = require("path");
const homePageDetails = require("../Models/HomePageModel");

const app = express();

const homePageImages = multer.diskStorage({
  destination: "./HomePageImages",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: homePageImages,
});

const multipleImg = upload.fields([
  { name: "backGroudImg", maxCount: 1 },
  { name: "logo", maxCount: 1 },
]);

//image uploading not completed
router.post("/", multipleImg, (req, res) => {
  const { homePageTitle, date, time, venue, homePageDescription } = req.body;

  const details = new HomePageRoute({
    homePageTitle,
    date,
    time,
    venue,
    backGroudImg: `http://localhost:5000/images/${req.file.filename}`,
    logo: `http://localhost:5000/images/${req.file.filename}`,
    homePageDescription,
  });

  details
    .save()
    .then(() => {
      res.json("Home page details added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/", async (req, res) => {
  HomePageRoute.find()
    .then((details) => {
      res.json(details);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", async (req, res) => {
  let detailId = req.params.id;

  await HomePageRoute.findById(detailId)
    .then((detail) => {
      res.send({ status: "Detail Are Fetched", detail });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", async (req, res) => {
  let detailId = req.params.id;

  await HomePageRoute.findByIdAndDelete(detailId)
    .then(() => {
      res.send({ status: "Details is deleted" });
    })
    .catch((err) => {
      res.send({ status: "error in fetching", err: err.message });
    });
});

router.put("/:id", async (req, res) => {
  let detailId = req.params.id;

  const { homePageTitle, date, time, venue, homePageDescription } = req.body;

  const details = new HomePageRoute({
    homePageTitle,
    date,
    time,
    venue,
    backGroudImg: req.file.toString,
    logo: req.file.toString,
    homePageDescription,
  });

  await HomePageRoute.findByIdAndUpdate(detailId, details)
    .then(() => {
      res.send({ status: "Details are updated" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
