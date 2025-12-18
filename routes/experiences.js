const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");

//Experiences Routes
//Index Route
router.get("/", wrapAsync(async (req, res) => {
  const alllistings = await Listing.find({}).limit(6);
  res.render("experiences/index.ejs", { alllistings });
}));

//Export
module.exports = router;
