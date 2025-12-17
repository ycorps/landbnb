const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');

//User-Routes

//SignUp Route
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

router.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({username, email });
    const registeredUser = await User.register(user, password);
    console.log(registeredUser);

    req.flash("success", "Welcome To LANDBNB");
    res.redirect("/listings");
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
});

//LogIn Route

router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

router.post("/login",passport.authenticate("local", { failureFlash: true, failureRedirect: "/login" }), wrapAsync((req, res) => {
    
  req.flash("success", "Welcome Back!");
  res.redirect("/listings");
}));

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
});




module.exports = router;