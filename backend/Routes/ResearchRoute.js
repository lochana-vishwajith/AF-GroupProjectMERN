//Savith IT18014396
const express = require("express");
const router = express.Router();
const Research = require("../API/ResearchAPI");

router.post("/addResearchDetails/:id", Research.addResearchDetails);

router.get("/getResearchDetails", Research.getAllResearchDetails);

router.get("/getAcceptedResearches", Research.getAcceptedResearchDetails);

router.get("/getResearch/:id", Research.getResearchById);

router.put("/editResearchDetails/:id", Research.editResearchDetails);

router.put(
  "/editResearchDetailsStatus/:id",
  Research.editResearchDetailsStatus
);

router.delete("/deleteResearchDetail/:id", Research.deleteResearchDetail);

router.get("/userResearch/:id", Research.getResearchByUser);

router.get("/payedResearch", Research.getPayedResearchDetails);

module.exports = router;
