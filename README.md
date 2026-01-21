# 🌍 LANDBNB - Travel Booking Site

> **Modern Travel Experience Platform | Discover • Book • Explore**

<div align="center">

![LANDBNB Badge](https://img.shields.io/badge/LANDBNB-Travel%20Booking-FF6B6B?style=flat-square&logo=airbnb)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Connected-13AA52?style=flat-square&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=flat-square)

</div>

---

## 🎯 About LANDBNB

**LANDBNB** is a sophisticated travel booking platform designed to revolutionize how travelers discover and experience unique accommodations and services worldwide. Built with modern web technologies, LANDBNB connects travelers with exceptional homes, curated experiences, and premium travel services.

Whether you're looking for a cozy apartment in Paris, an adventure experience in Bali, or a professional tour guide in Rome, LANDBNB has it all!

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technology |
|----------|-----------|
| **Frontend** | EJS, Bootstrap 5, HTML5, CSS3, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | Passport.js, Local Strategy |
| **Image Storage** | Cloudinary |
| **Validation** | Joi |
| **File Upload** | Multer |
| **Session Management** | Express Session |
| **Notifications** | Connect Flash |

</div>

---

## 📋 Project Structure

```
landbnb/
├── 📁 views/
│   ├── 📁 listings/          # Accommodation listings pages
│   ├── 📁 experiences/       # Experiences showcase
│   ├── 📁 services/          # Services catalog
│   ├── 📁 users/             # Auth pages (login, signup)
│   ├── 📁 includes/          # Navbar, footer, flash messages
│   └── 📁 layouts/           # Base layout template
├── 📁 models/                # MongoDB schemas
│   ├── listing.js            # Listing model
│   ├── review.js             # Review model
│   └── user.js               # User model
├── 📁 controllers/           # Business logic
│   ├── listings.js           # Listing operations
│   ├── reviews.js            # Review operations
│   └── users.js              # User operations
├── 📁 routes/                # API routes
│   ├── listing.js
│   ├── review.js
│   ├── experiences.js
│   ├── services.js
│   └── user.js
├── 📁 public/
│   ├── 📁 css/               # Stylesheets
│   └── 📁 js/                # Client-side scripts
├── 📁 init/                  # Database initialization
├── 📁 utils/                 # Helper functions
├── app.js                    # Main application file
├── middleware.js             # Custom middleware
├── cloudConfig.js            # Cloud storage config
└── package.json              # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (Local or Cloud)
- **npm** or **yarn**
- **Cloudinary Account** (for image uploads)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/landbnb.git
   cd landbnb
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/Wanderlust
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_KEY=your_cloudinary_key
   CLOUDINARY_SECRET=your_cloudinary_secret
   SESSION_SECRET=your_session_secret
   ```

4. **Initialize Database (Optional)**
   ```bash
   node init/index.js
   ```

5. **Start the Server**
   ```bash
   # Development with nodemon
   npm run dev
   
   # Production
   npm start
   ```

6. **Access the Application**
   Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

---

## 🌟 Core Pages

| Page | Description |
|------|-------------|
| 🏠 **Home/Listings** | Browse all available properties |
| 🎭 **Experiences** | Discover unique local experiences |
| 🛎️ **Services** | Explore premium travel services |
| 🔍 **Search Results** | Find listings based on queries |
| 📝 **Listing Details** | Full property information with reviews |
| ➕ **Create Listing** | Host can add new properties |
| ✏️ **Edit Listing** | Modify property details |
| 👤 **User Profile** | Manage account information |
| 🔑 **Authentication** | Login/Signup functionality |

---





## 🔄 Data Models

### User
```javascript
{
  username: String (unique),
  email: String,
  password: String (hashed),
  profile: Object,
  listings: [ObjectId],
  bookings: [ObjectId]
}
```

### Listing
```javascript
{
  title: String,
  description: String,
  location: String,
  country: String,
  price: Number,
  image: { url: String, filename: String },
  reviews: [ObjectId],
  createdBy: ObjectId
}
```

### Review
```javascript
{
  comment: String,
  rating: Number (1-5),
  author: ObjectId,
  listing: ObjectId,
  createdAt: Date
}
```

## 👨‍💻 Links

- 🌐 Website: [landbnb.shaileshyadav.in](https://landbnb.shaileshyadav.in)
- 💼 LinkedIn: [@yshail](https://linkedin.com/in/yshail)
- 🐙 GitHub: [@yshail](https://github.com/yshail)
- 📧 Email: contact@shaileshyadav.in

---


<div align="center">


[⬆ back to top](#-landbnb---your-gateway-to-unforgettable-journeys)

</div>
