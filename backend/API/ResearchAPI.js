//Savith IT18014396
const Research = require("../Models/ResearchModel");
const User = require("../Models/User");

async function addResearchDetails(research) {
  const researchData = new Research({
    researchTitle: research.title,
    researchField: research.field,
    researchYear: research.year,
    coAuthors: research.authors,
    isAccepted: research.isAccepted,
    fileName: `http://localhost:5000/repaper/${research.file.filename}`,
    // fileName: `http://localhost:5000/repaper/${file}`,
  });

  try {
    const result = await researchData.save();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getAllResearchDetails() {
  try {
    const result = Research.find();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getAcceptedResearchDetails() {
  try {
    const result = Research.find({
      isAccepted: true,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getResearchById(id) {
  try {
    const result = await Research.findById({ id });
    return result;
  } catch (error) {
    console.log(error);
  }
}

function editResearchDetails(id, data) {
  try {
    const result = Research.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          researchTitle: data.title,
          researchField: data.field,
          researchYear: data.year,
          coAuthors: data.authors,
          isAccepted: data.isAccepted,
        },
      },
      { new: true }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function deleteResearchDetail(id) {
  try {
    const result = Research.findByIdAndDelete({ _id: id });
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addResearchDetails,
  getAllResearchDetails,
  getAcceptedResearchDetails,
  editResearchDetails,
  deleteResearchDetail,
  getResearchById,
};
