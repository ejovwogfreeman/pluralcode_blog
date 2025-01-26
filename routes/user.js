const express = require("express");
const router = express.Router();
const { registerUser, getUser } = require("../controllers/user");

router.post("/register", registerUser);
router.get("/user/:id", getUser);

module.exports = router;
