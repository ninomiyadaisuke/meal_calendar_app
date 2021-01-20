const UserList = require("../models/userList");

exports.test = (req, res) => {
	res.json({
		testMessage: "担当は山本さんです。",
	});
};

exports.createUserList = async (req, res) => {
	try {
		const newUser = await new UserList(req.body).save();
		res.json(newUser);
	} catch (err) {
		console.error(err);
		res.status(400).send("Not Create UserList");
	}
};

exports.allGetUserList = async (req, res) => {
	const list = await UserList.find({}).exec();
	res.json(list);
};
