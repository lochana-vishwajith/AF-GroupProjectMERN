const app = require("../app");
const mongoose = require("mongoose");
const supertest = require("supertest");
const Research = require("../API/ResearchAPI");

test("GetResearchDetails", async () => {
  const research = await Research.create({
    _id: "60ab249c9aa7925bb43f039e",
    researchTitle: "Using React in Health care",
    researchField: "Software Engineering",
    researchYear: 2021,
    coAuthors: "Savith r",
    isAccepted: false,
  });

  await supertest(app).get("/researchDetails/");
  expect(200).then((res) => {
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toEqual(1);
    expect(res.body[0]._id).toBe(post.id);
    expect(res.body[0].researchTitle).toBe(post.researchTitle);
    expect(res.body[0].researchField).toBe(post.researchField);
    expect(res.body[0].researchYear).toBe(post.researchYear);
    expect(res.body[0].coAuthors).toBe(post.coAuthors);
    expect(res.body[0].isAccepted).toBe(post.isAccepted);
  });
});

test("PostResearch", async () => {
  const result = await (
    await supertest(app).post("/researchDetails/")
  )
    .setEncoding({
      researchTitle: "Testing Angular with Test Scenarios",
      researchField: "Testing Testing",
      researchYear: 2021,
      coAuthors: "Savith A.D",
      isAccepted: false,
    })
    .expect(result.statusCode)
    .toBe(500);
});

test("PutResearch", async () => {
  const result = await (
    await supertest(app).put(`/researchDetails/${"60db5a0b6df4d921f41bd946"}`)
  )
    .setEncoding({
      researchTitle: "Testing React with Test Scenarios",
      researchField: "Software Engineering",
      researchYear: 2019,
      coAuthors: "Savith R",
      isAccepted: true,
    })
    .expect(result.statusCode)
    .toBe(500);
});
