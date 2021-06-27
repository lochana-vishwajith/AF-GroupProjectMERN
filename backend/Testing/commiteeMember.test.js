const app = require("../app");
const mongoose = require("mongoose");
const supertest = require("supertest");
const Member = require("../Routes/CommiteeMembersRoute");

test("GetMemberDetails", async () => {
  const keyNote = await keyNote.create({
    _id: "60ab249c9aa7925bb43f039e",
    memberName: "Dr. Nuwan Kodagoda",
    memberPosition: "General Co- Chair",
    memberQualification: "BSc in Computer Engeering in UOP",
  });

  await supertest(app).get("/memberDetails/");
  expect(200).then((res) => {
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toEqual(1);
    expect(res.body[0]._id).toBe(post.id);
    expect(res.body[0].memberName).toBe(post.memberName);
    expect(res.body[0].memberPosition).toBe(post.memberPosition);
    expect(res.body[0].memberQualification).toBe(post.memberQualification);
  });
});

test("PostDetails", async () => {
  const result = await (
    await supertest(app).post("/memberDetails/")
  )
    .setEncoding({
      memberName: "Lochana Vishawajith",
      memberPosition: "co- Chair",
      memberQualification: "Bsc in information Technology",
    })
    .expect(result.statusCode)
    .toBe(500);
});
test("PutDetails", async () => {
  const result = await (
    await supertest(app).put(`/memberDetails/${"60ab249c9aa7925bb43f039e"}`)
  )
    .setEncoding({
      memberName: "Dr. Nuwan Kodagoda",
      memberPosition: "General Co- Chair",
      memberQualification: "BSc in Computer Engeering in UOP",
    })
    .expect(result.statusCode)
    .toBe(500);
});
