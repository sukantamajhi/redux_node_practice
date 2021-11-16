const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mySql = require("mysql");
const con = require("./config/db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 4000;
const cors = require('cors');

const app = express();
dotenv.config("../.env");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(cookieParser());
const whiteList = ['localhost:3000', 'locahost:3001']
app.use(cors({
	origin: whiteList,
}))

app.use('/api', require('./routes/authentication'))

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});