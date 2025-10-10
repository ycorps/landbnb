const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    filename: String,
    url: {
      type: String,
      set: (v) => v === "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg" ? "" : v}
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ]
});

const Listing = mongoose.model("Listing", listingSchema);

//delete-middleware
listingSchema.post("findOneAndDelete",async (listing) => {
  if (listing){
    await Review.deleteMany({_id : {$in : listing.reviews}});
  }
});

module.exports = Listing;