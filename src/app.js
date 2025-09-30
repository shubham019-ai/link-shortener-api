import express from "express";
import shortenUrlRouter from "./routes/url.routes.js";
import { redirectToOriginalUrl } from "./controllers/url.controllers.js";

const app = express();

// --- Middleware ---
app.use(express.json());

// --- API Routes ---
app.use("/api/shorten", shortenUrlRouter);

// --- Main Application Routes ---
app.get("/:shortCode", redirectToOriginalUrl);

// --- Welcome Route ---
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Link Shortener API!" });
});

export { app };
