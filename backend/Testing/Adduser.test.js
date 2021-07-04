const app = require("../app");
const mongoose = require("mongoose");
const supertest = require("supertest");
const Member = require("../Routes/UserRoute");

test("GetUserDetails", async () => {
    const user = await keyNote.create({
        name: "A.M.H.B Attanayake",
        email: "admin@scope.lk",
        mobile: '753074257',
        linkedIn:"www.hasitha.linkedIn.com",
        category: "Researcher",
        description: "no description",
        awards:"not available",
    });

    await supertest(app).get("/myProfile/");
    expect(200).then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toEqual(1);
        expect(res.body[0]._id).toBe(post.name);
        expect(res.body[0].memberName).toBe(post.email);
        expect(res.body[0].memberPosition).toBe(post.mobile);
        expect(res.body[0].memberQualification).toBe(post.category);
        expect(res.body[0].memberQualification).toBe(post.description);
        expect(res.body[0].memberQualification).toBe(post.awards);
    });
});

test("addUsers", async () => {
    const result = await (
        await supertest(app).post("/addUsers/")
    )
        .setEncoding({
            name: "A.M.H.B Attanayake",
            email: "admin2@scope.lk",
            mobile:"0812434556"
        })
        .expect(result.statusCode)
        .toBe(500);
});

test("attendeePayment", async () => {
    const result = await (
        await supertest(app).put(`/attendeePayment/${"60dc32e0a16d5d1bac3df11c"}`)
    )
        .setEncoding({
            payment:true
        })
        .expect(result.statusCode)
        .toBe(500);
});
