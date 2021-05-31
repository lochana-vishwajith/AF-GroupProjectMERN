//Savith IT18014396
const express = require("express");
const router = express.Router();
const Research = require("../API/ResearchAPI");
const auth = require("../Middleware/UserAuth");
const User = require("../API/UserAPI");

const multer = require("multer");
const path = require("path");
const { equal } = require("assert");

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

router.post(
  "/addResearchDetails",
  upload.single("fileName"),
  async (req, res) => {
    console.log(req.file);
    const {
      researchTitle,
      researchField,
      researchYear,
      coAuthors,
      isAccepted,
    } = req.body;
    const details = {
      researchTitle,
      researchField,
      researchYear,
      coAuthors,
      isAccepted,
      fileName: req.file,
    };
    console.log(details);
    // console.log(JSON.stringify(research));
    const result = await Research.addResearchDetails(details);
    // const uId = req.user._id;
    // const resObj = await User.addResearches(uId,result)
    res.send(resObj);
    res.send(result);
  }
);

router.get("/getResearchDetails", async (req, res) => {
  const result = await Research.getAllResearchDetails();
  res.send(result);
});

router.get("/getAcceptedResearches", async (req, res) => {
  const result = await Research.getAcceptedResearchDetails();
  res.send(result);
});

router.get("/getResearch/:id", async (req, res) => {
  let id = req.params.id;
  const result = await Research.getResearchById(id);
  res.send(result);
});

router.put("/editResearchDetails/:id", async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  const result = await Research.editResearchDetails(id, data);
  res.send(result);
});

router.delete("/deleteResearchDetail/:id", async (req, res) => {
  let id = req.params.id;
  const result = await Research.deleteResearchDetail(id);
  res.send(`Sucsessfully Deleted' ${result}`);
});

router.post("/uploadResearch", upload.single("pdf"), (req, res) => {
  console.log(req.file);
  console.log(req.file.filename);
  res.send("File succesfully uploaded");
});

router.put("/acceptResearch/:id", (req, res) => {
  let id = req.params.id;
  let data = req.body;
  const result = Research.accceptResearchById(id, data);
  res.send(result);
});
module.exports = router;
