const router = require("express").Router();
const MemberDetails = require("../Models/CommiteeMembersModel");

//add commitee member details
router.post("/", (req, res) => {
  const { memberName, memberPosition, memberQualification, memberNotes } =
    req.body;

  const details = new MemberDetails({
    memberName,
    memberPosition,
    memberQualification,
    memberNotes,
  });

  details
    .save()
    .then(() => {
      res.send({ status: "Data is saved" });
    })
    .catch((err) => {
      res.send({ error: err.message });
      console.log(err);
    });
});

module.exports = router;
