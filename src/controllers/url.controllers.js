import { nanoid } from "nanoid";
import { Link } from "../models/link.models.js";

/**
 * @description Creates a new short URL
 * @route POST /api/shorten
 */
const shortenUrl = async (req, res) => {
  // Use camelCase 'originalUrl' to match the schema
  const { originalUrl } = req.body;
  const base = process.env.BASE_URL || `http://localhost:${process.env.PORT}`;

  if (!originalUrl) {
    return res.status(400).json({ error: "Original URL is required" });
  }

  try {
    const shortCode = nanoid(7);

    // Create a new document using the 'Link' model
    const newUrl = await Link.create({
      originalUrl,
      shortCode,
    });

    const shortUrl = `${base}/${shortCode}`;

    res.status(201).json({
      message: "Short URL created successfully",
      shortUrl: shortUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

/**
 * @description Redirects a short URL to the original URL
 * @route GET /:shortCode
 */
const redirectToOriginalUrl = async (req, res) => {
  try {
    const url = await Link.findOne({ shortCode: req.params.shortCode });

    if (url) {
      // If the link is found, perform the redirect
      return res.redirect(url.originalUrl);
    } else {
      // If no link is found, send a 404 Not Found error
      return res.status(404).json({ error: "No URL found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export { shortenUrl, redirectToOriginalUrl };
