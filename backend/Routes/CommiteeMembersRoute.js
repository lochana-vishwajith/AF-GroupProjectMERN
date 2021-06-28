const router = require("express").Router();
const MemberDetails = require("../Models/CommiteeMembersModel");

router.post("/", (req, res) => {
  const {
    memberName,
    memberPosition,
    memberQualification,
    memberNotes,
    imageUrl,
  } = req.body;

  const details = new MemberDetails({
    memberName,
    memberPosition,
    memberQualification,
    memberNotes,
    imageUrl,
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

router.get("/", (req, res) => {
  MemberDetails.find()
    .then((details) => {
      res.json(details);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", async (req, res) => {
  let mid = req.params.id;

  MemberDetails.findById(mid)
    .then((detail) => {
      res.send({ status: "Commitee member fetched", detail });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", async (req, res) => {
  let mid = req.params.id;

  const {
    memberName,
    memberPosition,
    memberQualification,
    memberNotes,
    imageUrl,
  } = req.body;

  const updateDetails = {
    memberName,
    memberPosition,
    memberQualification,
    memberNotes,
    imageUrl,
  };

  await MemberDetails.findByIdAndUpdate(mid, updateDetails)
    .then(() => {
      res.send({ status: "Details are updated" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", async (req, res) => {
  let mid = req.params.id;

  await MemberDetails.findByIdAndDelete(mid)
    .then(() => {
      res.send({ status: "Comittee member details are deleted" });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
