const Meal = require("../models/meal");

exports.test = (req, res) => {
	res.json({
		testMessage: "カレンダー担当は二ノ宮さんです。",
	});
};

exports.createMeal = async (req, res) => {
	try {
		const newMeal = await new Meal(req.body).save();
		res.json(newMeal);
	} catch (err) {
		console.error(err);
		res.status(400).send("Not Create BuyList");
	}
};

exports.allGetMeals = async (req, res) => {
	const list = await Meal.find({}).exec();
	res.json(list);
};
