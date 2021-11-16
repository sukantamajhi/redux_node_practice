const express = require("express");
const mySql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const con = require("../config/db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { loginController, registerController } = require("../controller/authentication");
const router = express.Router();

const app = express();
router.post("/login", loginController);
router.post("/register", registerController);
module.exports = router;
