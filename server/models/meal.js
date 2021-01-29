const mongoose = require("mongoose");
//const { ObjectId } = mongoose.Schema;

const mealSchema = new mongoose.Schema({
	date: {
		type: String,
		required: true,
	},
	menus: {
		type: Array,
		default: [],
	},
	users: {
		type: Array,
		default: [],
	},
	dishWashing: {
		type: Array,
		default: [],
	},
});

module.exports = mongoose.model("Meal", mealSchema);
