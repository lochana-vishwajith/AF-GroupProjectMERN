//Savith IT18014396
const Research = require("../Models/ResearchModel").researchDetails;
const User = require("../Models/UserModel");

const addResearchDetails = async (req, res) => {
  if (req.body) {
    element = req.params.id;
    const research = new Research(req.body);
    await research
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
        console.log(data);
        User.findByIdAndUpdate(element, {
          $push: {
            research: data._id,
          },
        })
          .then((data) => {
            console.log("Successfully added the Research Details...", data);
          })
          .catch((err) => {
            console.log({ error: err.message });
          });
      })
      .catch((error) => {
        res.status(500).send({
          error: error.message,
        });
      });
  }
};

const getAllResearchDetails = async (req, res) => {
  await Research.find({})
    // .populate("categories", "name description")
    .then((data) => {
      res.status(200).send({
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        error: error.message,
      });
    });
};

const getAcceptedResearchDetails = async (req, res) => {
  await Research.find({ isAccepted: true })
    .then((data) => {
      res.status(200).send({
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        error: error.message,
      });
    });
};

const getResearchById = async (req, res) => {
  let id = req.params.id;
  console.log("ID:", id);
  await Research.findById({ _id: id })
    .then((data) => {
      console.log(data);
      res.status(200).send({
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        error: error.message,
      });
    });
};

const editResearchDetails = async (req, res) => {
  let id = req.params.id;
  let dataSet = req.body;
  console.log("ID:", id);
  console.log("Data:", dataSet);
  await Research.findByIdAndUpdate(id, dataSet)
    .then((data) => {
      console.log(data);
      res.status(200).send({
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        error: error.message,
      });
    });
};
const editResearchDetailsStatus = async (req, res) => {
  let id = req.params.id;
  console.log("Rid" + id);
  console.log("ID:", id);

  await Research.update(
    { _id: id },
    { $set: { isPayed: true } },
    { upsert: true }
  )
    .then((data) => {
      console.log(data);
      res.status(200).send({
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        error: error.message,
      });
    });
};

const deleteResearchDetail = async (req, res) => {
  if (req.params.id) {
    await Research.findByIdAndDelete(req.params.id)
      .then((data) => {
        res.status(200).send({
          data: data,
        });
      })
      .catch((error) => {
        res.status(500).send({
          error: error.message,
        });
      });
  }
};

const getResearchByUser = async (req, res) => {
  if (req.params && req.params.id) {
    await User.findById(req.params.id)
      .populate(
        "research",
        "researchTitle researchField researchYear coAuthors isAccepted"
      )
      .then((data) => {
        res.status(200).send({
          data: data,
        });
      })
      .catch((error) => {
        res.status(500).send({
          error: error.message,
        });
      });
  }
};

const getPayedResearchDetails = async (req, res) => {
  await Research.find({ isAccepted: true, isPayed: true })
    .then((data) => {
      res.status(200).send({
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        error: error.message,
      });
    });
};

module.exports = {
  addResearchDetails,
  getAllResearchDetails,
  getAcceptedResearchDetails,
  editResearchDetails,
  deleteResearchDetail,
  getResearchById,
  getResearchByUser,
  getPayedResearchDetails,
  editResearchDetailsStatus,
};
