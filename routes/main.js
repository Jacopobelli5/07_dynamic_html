// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
router.get("/", (req, res) => res.render("index.ejs"));
router.get("/about", (req, res) => res.render("about.ejs"));
router.get("/contact", (req, res) => res.render("contact.ejs"))

// Export the router object
module.exports = router