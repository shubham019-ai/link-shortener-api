import { jest, beforeAll, afterAll, describe, it, expect } from "@jest/globals";

import request from "supertest";
import { app } from "../src/app.js";
import mongoose from "mongoose";
import { Link } from "../src/models/link.models.js";
import connectDB from "../src/db/index.js";

// Give Jest a longer timeout for database operations
jest.setTimeout(30000);

// --- SETUP AND TEARDOWN ---

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await Link.deleteMany({});
  await mongoose.connection.close();
});

// --- TESTS ---

describe("URL Shortener API", () => {
  it("should create a new short URL for a valid POST request", async () => {
    const response = await request(app)
      .post("/api/shorten")
      .send({ originalUrl: "https://jestjs.io/" });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("shortUrl");
  });

  it("should return a 400 error for a request with no originalUrl", async () => {
    const response = await request(app).post("/api/shorten").send({});

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error", "Original URL is required");
  });
});
