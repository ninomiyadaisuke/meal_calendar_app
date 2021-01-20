const mongoose = require("mongoose");

const buyListShema = new mongoose.Schema({
	item: {
		type: String,
		required: true,
	},
	count: {
		type: Number,
		default: 1,
	},
	//date: Date
});

module.exports = mongoose.model("BuyList", buyListShema);
