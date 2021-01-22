const Meal = require("../models/meal");

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

exports.removeMeal = async (req, res) => {
	try { 
		const removeMeal = await Meal.findOneAndDelete( req.params._id ).exec()
		res.json(removeMeal)
	} catch (err) {
		console.log(err);
    res.status(400).json('Not Deleted')
}
}