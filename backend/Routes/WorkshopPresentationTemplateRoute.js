const express = require("express");
const router = express.Router();
const workshopTemplate = require("../Models/WorkshopPresentationTemplateModel");
const multer = require("multer");
const path = require("path");

const template = multer.diskStorage({
  destination: "./WSPTemplate",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: template,
});

router.post("/", upload.single("presentationFile"), (req, res, next) => {
  const { templateTitle, specialNotes } = req.body;

  const presentationDetails = new workshopTemplate({
    templateTitle: null,
    templateFile: `http://localhost:5000/presentationFolder/${req.file.filename}`,
    specialNotes: null,
  });

  presentationDetails
    .save()
    .then(() => {
      res.json("Presentation Details Are Saved");
    })
    .catch((err) => {
      console.log({ status: "error in saving", error: err.message });
    });
});

// router.get("/", async (req, res) => {
//   await workshopTemplate
//     .find()
//     .then((details) => {
//       res.status(200).json(details);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// router.get("/:id", async (req, res) => {
//   let templateId = req.params.id;

//   await workshopTemplate
//     .findById(templateId)
//     .then((detilas) => {
//       res.status(200).send({ status: "Details Are Fetched", detilas });
//     })
//     .catch((err) => {
//       res.send({ status: "error in fetching", err: err.message });
//     });
// });

// router.delete("/:id", async (req, res) => {
//   let templateId = req.params.id;

//   await workshopTemplate
//     .findOneAndDelete(templateId)
//     .then(() => {
//       res.send({ status: "Details Are Deteled" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

module.exports = router;
