require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const  CloudinaryStorage  = require("multer-storage-cloudinary");


// Validate that required environment variables are set
if (!process.env.CLOUD_NAME || !process.env.CLOUD_API_KEY || !process.env.CLOUD_API_SECRET) {
  console.error("❌ ERROR: Missing Cloudinary environment variables!");
  console.error("Please set CLOUD_NAME, CLOUD_API_KEY, and CLOUD_API_SECRET in your .env file");
  process.exit(1);
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Landbnb",
    allowedFormats: ["jpg", "png", "jpeg"]
    }
});

module.exports = {
  storage,
  cloudinary
}