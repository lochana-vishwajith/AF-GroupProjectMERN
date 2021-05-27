const express = require("express");
const router = express.Router();
const Workshop = require("../Models/Workshop");

router.get("/getws", (req, res) => {
  res.send("workshop details");
});

router.post("/postws", (req, res) => {
  res.send("post works");
});

router.put("/updatews/:id", (req, res) => {
  res.send(req.params.id);
});

router.delete("/deletews/:id", (req, res) => {
  res.send("delete works");
});

module.exports = router;
