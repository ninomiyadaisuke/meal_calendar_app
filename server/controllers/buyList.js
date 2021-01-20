const BuyList = require("../models/buyList");

exports.test = (req, res) => {
	res.json({
		testMessage: "担当は山口くんです。",
	});
};

exports.createBuyList = async (req, res) => {
	try {
		const newBuyList = await new BuyList(req.body).save();
		res.json(newBuyList);
	} catch (err) {
		console.error(err);
		res.status(400).send("Not Create BuyList");
	}
};

exports.allGetBuyList = async (req, res) => {
	const list = await BuyList.find({}).exec();
	res.json(list);
};
