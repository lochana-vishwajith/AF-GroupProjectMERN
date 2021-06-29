const express = require("express");
const router = express.Router();
const WorkshopTemplateDetails = require("../Models/WorkshopTemplateModel");

router.post("/", (req, res, next) => {
  const { templateTitle, specialNotes, templateFile } = req.body;

  const templateDetails = new WorkshopTemplateDetails({
    templateTitle,
    templateFile,
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

router.put("/:id", async (req, res) => {
  let templateId = req.params.id;

  const { templateTitle, specialNotes, templateFile } = req.body;

  const details = {
    templateTitle,
    templateFile,
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
