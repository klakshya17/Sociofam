const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../keys")
const requireLogin = require("../middleware/requireLogin")

// router.get("/", (req, res) => {
//   res.send("hello")
// })

router.get("/protected", requireLogin, (req, res) => {
  res.send("Hello User")
})

router.post("/signup", (req, res) => {
  //   console.log(req.body.name)
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(422).json({ error: "please add all fields" })
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exists with that email" })
      }
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
          name,
        })
        user
          .save()
          .then((user) => {
            res.json({ message: "saved successfully" })
          })
          .catch((err) => {
            console.log(err)
          })
      })
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post("/signin", (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(422).json({ error: "Please add email or password" })
  }
  User.findOne({ email: email }).them((savedUser) => {
    if (!savedUser) {
      res.status(422).json({ error: "Invalid email or password" })
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          //   res.json({ message: "Signed in successfully" })
          const token = jwt.sign({ _id: savedUser.id }, JWT_SECRET)
          res.json({ token })
        } else {
          res.status(422).json({ error: "Invalid email or password" })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })
})
module.exports = router