const express = require("express");
const router = express.Router();
const HomePageRoute = require("../Models/HomePageModel");
const path = require("path");

const app = express();

router.post("/", (req, res) => {
  const {
    confName,
    dateOfConf,
    venueOfConf,
    imageUrl,
    confDesc,
    trackOne,
    trackTwo,
    trackThree,
    trackFour,
    status,
  } = req.body;

  const details = new HomePageRoute({
    confName,
    dateOfConf,
    venueOfConf,
    imageUrl,
    confDesc,
    trackOne,
    trackTwo,
    trackThree,
    trackFour,
    status,
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

router.get("/:type", async (req, res) => {
  let type = req.params.type;

  await HomePageRoute.find({ status: type })
    .then((detail) => {
      res.send(detail);
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

  const { status } = req.body;

  await HomePageRoute.update(
    { _id: detailId },
    { $set: { status: status } },
    { upsert: true }
  )
    .then(() => {
      res.send({ status: "Details are updated" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
