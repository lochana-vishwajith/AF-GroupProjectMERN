//Savith IT18014396
const express = require("express");
const router = express.Router();
const Research = require("../API/ResearchAPI");

const multer = require("multer");
const path = require("path");

const fileStorageEngine = multer.diskStorage({
  destination: "./FileStorage/ResearchPapers",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: fileStorageEngine });

router.post("/addResearchDetails/:id", Research.addResearchDetails);

router.get("/getResearchDetails", Research.getAllResearchDetails);

router.get("/getAcceptedResearches", Research.getAcceptedResearchDetails);

router.get("/getResearch/:id", Research.getResearchById);

router.put("/editResearchDetails/:id", Research.editResearchDetails);

router.delete("/deleteResearchDetail/:id", Research.deleteResearchDetail);

router.get("/userResearch/:id", Research.getResearchByUser);

router.post("/uploadResearch", upload.single("pdf"), (req, res) => {
  console.log(req.file);
  console.log(req.file.filename);
  res.send("File succesfully uploaded");
});
module.exports = router;
