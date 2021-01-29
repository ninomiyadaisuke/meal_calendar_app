const BuyList = require("../models/buyList");

exports.createBuyList = async (req, res) => {
	try {
		const newBuyList = await new BuyList(req.body).save();
		res.json(newBuyList);
	} catch (err) {
		console.error(err);
		res.status(400).send("Not Create BuyList");
	}
};

exports.getBuylist = async (req, res) => {
	try {
		getBuy = await BuyList.findOne({ _id: req.params._id });
		res.json(getBuy);
	} catch (err) {
		console.log(err);
		res.status(400).json("Not Get Buylist");
	}
};

exports.allGetBuyList = async (req, res) => {
	const list = await BuyList.find({}).exec();
	res.json(list);
};

exports.getBuyListByDate = async (req, res) => {
	try {
		const date = req.params.date;
		const findDate = await BuyList.find({ date }).exec();
		res.json(findDate);
		console.log(findDate);
	} catch (err) {
		console.log(err);
		res.status(400).json("Not Found!");
	}
};

exports.removeBuylist = async (req, res) => {
	try {
		const removeBuylist = await BuyList.findByIdAndDelete(req.params.id)
			.select("_id")
			.exec();
		res.json(removeBuylist);
	} catch (err) {
		console.log(err);
		res.status(400).json("Not Deleted");
	}
};

exports.updateBuylist = async (req, res) => {
	try {
		const { item, count } = req.body;
		const updateBuylist = await BuyList.findByIdAndUpdate(
			req.params.id,
			{ item, count },
			{ new: true }
		)
			.select("_id")
			.exec();
		res.json(updateBuylist);
	} catch (err) {
		console.log(err);
		res.status(400).json("Not Updated");
	}
};
