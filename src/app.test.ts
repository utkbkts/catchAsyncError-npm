import request from "supertest";
import app from "./app";

describe("POST /register", () => {
  it("should register a user successfully", async () => {
    const response = await request(app)
      .post("/register")
      .send({ username: "testuser" });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      success: true,
      message: "User registered",
    });
  });

  it("should return 500 if username is missing", async () => {
    const response = await request(app).post("/register").send({});

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      success: false,
      message: "Username is required",
    });
  });
});
