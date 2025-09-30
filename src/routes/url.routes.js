import express from "express"
import {shortenUrl} from "../controllers/url.controllers.js"

const router = express.Router();

// Define the POST route and link it to the controller function
router.post("/", shortenUrl);

export default router;
