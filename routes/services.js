const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");

//Services Routes
//Index Route
router.get("/", wrapAsync(async (req, res) => {
  const alllistings = await Listing.find({}).limit(6);
  res.render("services/index.ejs", { alllistings });
}));

//Export
module.exports = router;
