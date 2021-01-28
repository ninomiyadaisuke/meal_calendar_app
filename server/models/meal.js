const mongoose = require("mongoose");
//const { ObjectId } = mongoose.Schema;

const mealSchema = new mongoose.Schema({
	date: {
		type: String,
		required: true,
	},
	main: {
		type: String,
		required: true,
	},
	rice: String,
	soup: String,
	subMenu1: String,
	subMenu2: String,
	subMenu3: String,
	users: {
		type: Array,
		default: [],
	},
});

module.exports = mongoose.model("Meal", mealSchema);
