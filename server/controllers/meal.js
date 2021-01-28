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

exports.getAllMeals = async (req, res) => {
	const list = await Meal.find({}).exec();
	res.json(list);
};

exports.getMealByDate = async (req, res) => {
	try {
		const date = req.params.date;
		const findDate = await Meal.find({ date }).exec();
		res.json(findDate);
		console.log(findDate);
	} catch (err) {
		console.log(err);
		res.status(400).json("Not Found!");
	}
};

exports.updateMeal = async (req, res) => {
	try {
		const updateMeal = await Meal.findOne(req.params.id).exec();
		const meal = await updateMeal.update(req.body, { new: true }).exec();
		res.json(meal);
	} catch (err) {
		console.log(err);
		res.status(400).json("Not Updated");
	}
};

exports.removeMeal = async (req, res) => {
	try {
		const removeMeal = await Meal.findOneAndDelete(req.params.id).exec();
		res.json(removeMeal);
	} catch (err) {
		console.log(err);
		res.status(400).json("Not Deleted");
	}
};

exports.addUser = async (req, res) => {
	try {
		const user = await Meal.findByIdAndUpdate(req.params.id, {
			$addToSet: { users: req.body },
		});
		res.json(user);
	} catch (err) {
		console.error(err);
		res.status(400).json("Not added User");
	}
};

exports.pullUser = async (req, res) => {
	try {
		const user = await Meal.findByIdAndUpdate(req.params.id, {
			$pull: { users: req.body },
		});
		res.json(user);
		console.log(user);
	} catch (err) {
		console.error(err);
		res.status(400).json("Not added User");
	}
};
