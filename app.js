const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const Review = require("./models/review.js");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

//connecting mongodb
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Wanderlust");
  console.log("MongoDb Connected");
};
main().catch(err => console.log(err));

//middlewaress
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);


//Home-Route
app.get("/", (req, res) => {
  res.send("Hi i am listening..")
});

//Listing-Route
app.use("/listings", listings);

//Review-Route
app.use("/listings/:id/reviews", reviews);



app.listen(8080, (req, res) => {
  console.log("Server is listening")
});



