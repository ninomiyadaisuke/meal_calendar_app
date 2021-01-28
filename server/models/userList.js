const mongoose = require("mongoose");

const userListSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("UserList", userListSchema);
