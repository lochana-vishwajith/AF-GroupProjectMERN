const app = require("../app");
const mongoose = require("mongoose");
const supertest = require("supertest");
const Workshop = require("../Routes/workshop");

test("GetWorkshopDetails", async () => {
  const workshop = await Workshop({
    _id: "60ab249c9aa7925bb43f039e",
    wsName: "Node js",
    wsDate: "2021-06-07T00:00:00.000+00:00",
    wsDescription: "For beginners",
    wsPresentorName: "Kamal Gunarathne",
    wsPresentorDescription: "Lecturer",
    status: false,
  });

  await supertest(app).get("/getws/");
  expect(200).then((res) => {
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toEqual(1);
    expect(res.body[0]._id).toBe(post.id);
    expect(res.body[0].wsName).toBe(post.wsName);
    expect(res.body[0].wsDate).toBe(post.wsDate);
    expect(res.body[0].wsDescription).toBe(post.wsDescription);
    expect(res.body[0].wsPresentorName).toBe(post.wsPresentorName);
    expect(res.body[0].wsPresentorDescription).toBe(
      post.wsPresentorDescription
    );
    expect(res.body[0].status).toBe(post.status);
  });
});

test("PostWorkshop", async () => {
  const result = await (
    await supertest(app).post("/postws/")
  )
    .setEncoding({
      wsName: "Mongo DB",
      wsDate: "2021-06-09T00:00:00.000+00:00",
      wsDescription: "Good",
      wsPresentorName: "Saman Kumara",
      wsPresentorDescription: "Undergraduate",
      status: false,
    })
    .expect(result.statusCode)
    .toBe(500);
});

test("PutWorkshop", async () => {
  const result = await (
    await supertest(app).put(`/updatews/${"60d83766e82acb045404bcd2"}`)
  )
    .setEncoding({
      wsName: "Anjular JS",
      wsDate: "2021-07-09T00:00:00.000+00:00",
      wsDescription: "Good",
      wsPresentorName: "Ranil Wickramasinha",
      wsPresentorDescription: "Lecturer",
      status: true,
    })
    .expect(result.statusCode)
    .toBe(500);
});
