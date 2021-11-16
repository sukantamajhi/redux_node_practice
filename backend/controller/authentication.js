// Login functionality controller
const con = require("../config/db");
const mySql = require("mysql");

exports.loginController = (req, res) => {
	// console.log(req.body);
	// console.log(req.body.email, "This is email");
	// console.log(req.body.password, "This is Password");
	const { email, password } = req.body;
	let sql = "SELECT * FROM user WHERE email = '" + email + "'";
	console.log(sql);
	con.query(sql, (err, result) => {
		// console.log(result);
		if (err) throw err;
		if (result.length > 0) {
			const user = result[0];
			console.log(user);

			const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
				expiresIn: "720h",
			});
			res.cookie("token", token, { httpOnly: true });
			res.status(200).json({
				error: false,
				user: user,
				token,
			});
		} else {
			res.status(401).json({
				error: true,
				message: "Invalid credentials",
			});
		}
	});
};

exports.registerController = (req, res) => {
	console.log(req.body);
	const { firstName, lastName, userName, email, password } = req.body;
	let sql = "SELECT * FROM user WHERE email = '" + email + "'";
	con.query(sql, (err, result) => {
		if (err) throw err;
		if (result.length > 0) {
			res.json({
				error: true,
				message: "Email already exists",
			});
		} else {
			let sql =
				"INSERT INTO user (username,fname,lname, email, password) VALUES ('" +
				userName +
				"','" +
				firstName +
				"','" +
				lastName +
				"', '" +
				email +
				"', '" +
				password +
				"')";
			con.query(sql, (err, result) => {
				if (err) throw err;
				res.status(200).json({
					error: false,
					message: "User registered successfully",
				});
			});
		}
	});
};
