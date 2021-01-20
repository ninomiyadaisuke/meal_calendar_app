const mongoose = require("mongoose");
//const { ObjectId } = mongoose.Schema;

const mealSchema = new mongoose.Schema({
	// date: {
	//   //
	// },
	main: {
		type: String,
		required: true,
	},
	rice: String,
	soup: String,
	subMenu: {
		type: Array,
		default: [],
	},
	// users: {
	// 	type: ObjectId,
	// 	ref: "UserList",
	// },
});

module.exports = mongoose.model("Meal", mealSchema);
