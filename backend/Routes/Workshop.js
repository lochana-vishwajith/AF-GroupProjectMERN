const express = require("express");
const router = express.Router();
const Workshop = require("../Models/Workshop").workshopModel;
const UserModel = require("../Models/UserModel");

//get all workshops
router.get("/getws", async (req, res) => {
  try {
    const workshops = await Workshop.find();
    res.send(workshops);
  } catch (error) {
    res.send(`ERROR - ${error}`);
  }
});

//get admin approved workshops
router.get("/finalws", async (req, res) => {
  try {
    const workshops = await Workshop.find({ status: { $eq: true } });
    res.send(workshops);
  } catch (error) {
    res.send(`ERROR - ${error}`);
  }
});

router.get("/getws/:id", async (req, res) => {
  try {
    const workshops = await Workshop.findById(req.params.id);
    res.send(workshops);
  } catch (error) {
    res.send(`ERROR - ${error}`);
  }
});

router.post("/postws/:id", async (req, res) => {
  id = req.params.id;
  console.log(id);
  const workshop = new Workshop({
    wsName: req.body.wsName,
    wsDate: req.body.wsDate,
    wsDescription: req.body.wsDescription,
    wsPresentorName: req.body.wsPresentorName,
    wsPresentorDescription: req.body.wsPresentorDescription,
    status: req.body.status,
    comment: req.body.comment,
    url: req.body.url,
  });

  try {
    //const id = "60d82ca3b881ad7a64ce04f2";
    const ws1 = await workshop.save();
    res.send(ws1);
    console.log(ws1);

    await UserModel.findByIdAndUpdate(id, { $push: { workshop: ws1._id } });
  } catch (error) {
    res.send(`Error - ${error}`);
  }
});

//update workshop
router.put("/updatews/:id", async (req, res) => {
  const ws = await Workshop.findById(req.params.id);

  try {
    ws.wsName = req.body.wsName ? req.body.wsName : ws.wsName;
    ws.wsDate = req.body.wsDate ? req.body.wsDate : ws.wsDate;
    ws.wsDescription = req.body.wsDescription
      ? req.body.wsDescription
      : ws.wsDescription;
    ws.wsPresentorName = req.body.wsPresentorName
      ? req.body.wsPresentorName
      : ws.wsPresentorName;
    ws.wsPresentorDescription = req.body.wsPresentorDescription
      ? req.body.wsPresentorDescription
      : ws.wsPresentorDescription;
    ws.status = req.body.status ? req.body.status : ws.status;
    ws.comment = req.body.comment ? req.body.comment : ws.comment;
    ws.url = req.body.url ? req.body.url : ws.url;

    const ws1 = ws.save(ws);
    res.send("Updated succesfully");
  } catch (error) {
    res.send(`Error - ${error}`);
  }
});

//delete workshop
router.delete("/deletews/:id", async (req, res) => {
  try {
    const ws = await Workshop.findById(req.params.id);

    const ws1 = await ws.remove();
    res.send(ws1);
  } catch (error) {
    res.send(`Error - ${error}`);
  }
});

module.exports = router;
