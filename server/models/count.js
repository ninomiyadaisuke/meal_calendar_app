const mongoose = require("mongoose");

const countSchema = new mongoose.Schema({
	count: {
		type: Number,
		required: true
	},
});

module.exports = mongoose.model("Count", countSchema);
