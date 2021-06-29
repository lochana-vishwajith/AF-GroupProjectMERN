const router = require("express").Router();
const HomeContent = require("../Models/HomePagePresentContentModel");

router.post("/", async (req, res) => {
  const { contentId } = req.body;

  const Id = new HomeContent({
    contentId,
  });

  await Id.save()
    .then(() => {
      res.json("Details Are Saved");
    })
    .catch((err) => {
      console.log({ status: "error in saving", error: err.message });
    });
});

router.get("/", async (req, res) => {
  await HomeContent.find()
    .populate(
      "contentId",
      "confName dateOfConf venueOfConf imageUrl confDesc trackOne trackTwo trackThree trackFour status"
    )
    .then((details) => {
      res.json(details);
    })
    .catch((err) => {
      console.log({ status: "error in saving", error: err.message });
    });
});
router.delete("/:id", async (req, res) => {
  const contentID = req.params.id;
  HomeContent.findByIdAndDelete(contentID)
    .then(() => {
      res.send("Details are deleted");
    })
    .catch((err) => {
      res.send(err);
    });
});
module.exports = router;
