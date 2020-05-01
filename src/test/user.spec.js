'use strict'

const request = require('supertest')
const {User} = require('../resource/user/model.js') 
const app = require('../../app');


describe("api/users", () => {
    beforeEach(async () => {
      await User.delete({});
    });
  
    describe("GET /", () => {
      it("should return all users", async () => {
        const users = [
          { name: "test", email: "test@gmail.com", password: "1234" },
          { name: "test1", email: "test1@gmail.com", password: "5678" }
        ];
        await User.insert(users);
        console.log(users);
        const res = await request(app).get("/api/users");
        expect(res.status).to.equal(200);
        expect(res.body.length).toEqual(2);
      });
    });
  
    describe("GET/:id", () => {
      it("return a user if valid id is passed", async () => {
        const user = new User({
          name: "test",
          email: "test@gmail.com",
          password: "1234"
        });
        await user.save();
        const res = await request(app).get("/api/users/" + user._id);
        expect(res.status).to.equal(200);
        expect(res.body).toBe.property("name", user.name);
      });
  
      it("return 400 error when invalid object id", async () => {
        const res = await request(app).get("/api/users/1");
        expect(res.status).toEqual(400);
      });
  
      it("should return 404 error when valid object id does not exist", async () => {
        const res = await request(app).get("/api/users/66666060606faff");
        expect(res.status).toEqual(404);
      });
    });
  
    describe("POST /", () => {
      it("return user when the all request body is valid", async () => {
        const res = await request(app)
          .post("/api/users")
          .send({
            name: "test",
            email: "test@gmail.com",
            password: "1234"
          });
        expect(res.status).toEqual(200);
        expect(res.body).to.have.property("_id");
        expect(res.body).to.have.property("name", "test");
      });
  
    });
  
    describe("PUT /:id", () => {
      it("update the existing order and return 200", async () => {
        const user = new User({
          
          email: "test@gmail.com",
          password: "1234"
        });
        await user.save();
  
        const res = await request(app)
          .put("/api/users/" + user._id)
          .send({
            name: "newTest",
            email: "newemail@gmail.com",
            password: "1234"
          });
  
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property("name", "newTest");
      });
    });
  
    describe("DELETE /:id", () => {
      it("delete requested id and return response 200", async () => {
        const user = new User({
          name: "test",
          email: "test@gmail.com",
          password: "1234"
        });
        await user.save();
  
        const res = await request(app).delete("/api/users/" + user._id);
        expect(res.status).toEqual(200);
      });
  
      it("should return 404 when deleted user is requested", async () => {
        const user = new User({
          name: "test",
          email: "test@gmail.com",
          password: "1234"
        });
        await user.save();
  
        let res = await request(app).delete("/api/users/" + user._id);
        expect(res.status).toEqual(200);
  
        res = await request(app).get("/api/users/" + user._id);
        expect(res.status).toEqual(404);
      });
    });
  });