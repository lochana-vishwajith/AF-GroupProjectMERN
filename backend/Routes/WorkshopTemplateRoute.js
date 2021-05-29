const express = require("express");
const router = express.Router();
const WorkshopTemplateDetails = require("../Models/WorkshopTemplateModel");
const multer = require("multer");
const path = require("path");

const template = multer.diskStorage({
  destination: "./WorkshopRresentationTemplate",
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

router.post("/", upload.single("templateFile"), (req, res, next) => {
  const { templateTitle, specialNotes } = req.body;

  const templateDetails = new WorkshopTemplateDetails({
    templateTitle,
    templateFile: `http://localhost:5000/templateFolder/${req.file.filename}`,
    specialNotes,
  });

  templateDetails
    .save()
    .then(() => {
      res.json("Template Details Are Saved");
    })
    .catch((err) => {
      console.log({ status: "error in saving", error: err.message });
    });
});

router.get("/", async (req, res) => {
  await WorkshopTemplateDetails.find()
    .then((details) => {
      res.status(200).json(details);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", async (req, res) => {
  let templateId = req.params.id;

  await WorkshopTemplateDetails.findById(templateId)
    .then((detilas) => {
      res.status(200).send({ status: "Details Are Fetched", detilas });
    })
    .catch((err) => {
      res.send({ status: "error in fetching", err: err.message });
    });
});

router.put("/:id", upload.single("templateFile"), async (req, res) => {
  let templateId = req.params.id;

  const { templateTitle, specialNotes } = req.body;

  const details = {
    templateTitle,
    templateFile: `http://localhost:5000/templateFolder/${req.file.filename}`,
    specialNotes,
  };

  await WorkshopTemplateDetails.findByIdAndUpdate(templateId, details)
    .then(() => {
      res.send({ status: "Details are updated" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", async (req, res) => {
  let templateId = req.params.id;

  await WorkshopTemplateDetails.findOneAndDelete(templateId)
    .then(() => {
      res.send({ status: "Details Are Deteled" });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
