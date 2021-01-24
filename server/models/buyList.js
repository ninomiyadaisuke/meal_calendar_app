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
	date: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("BuyList", buyListShema);
