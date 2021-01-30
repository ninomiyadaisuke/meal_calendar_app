const Meal = require("../models/meal");

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

exports.createMeal = async (req, res) => {
	try {
		const newMeal = await new Meal(req.body).save();
		res.json(newMeal);
	} catch (err) {
		console.error(err);
		res.status(400).send("Not Create BuyList");
	}
};

exports.deleteMeal = async (req, res) => {
	try {
		const removeMeal = await Meal.findByIdAndDelete(req.params.id)
			.select("_id")
			.exec();
		res.json(removeMeal);
	} catch (err) {
		console.log(err);
		res.status(400).json("Not Deleted");
	}
};

exports.addMenu = async (req, res) => {
	try {
		const menu = await Meal.findByIdAndUpdate(req.params.id, {
			$addToSet: { menus: req.body },
		});
		res.json(menu);
	} catch (err) {
		console.error(err);
		res.status(400).json("Not added User");
	}
};

exports.removeMenu = async (req, res) => {
	try {
		const user = await Meal.findByIdAndUpdate(req.params.id, {
			$pull: { menus: req.body },
		});
		res.json(user);
		console.log(user);
	} catch (err) {
		console.error(err);
		res.status(400).json("Not pull Dish User");
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

exports.dishUser = async (req, res) => {
	try {
		const user = await Meal.findByIdAndUpdate(req.params.id, {
			$addToSet: { dishWashing: req.body },
		});
		res.json(user);
	} catch (err) {
		console.error(err);
		res.status(400).json("Not add dish User");
	}
};

exports.pullDishUser = async (req, res) => {
	try {
		const user = await Meal.findByIdAndUpdate(req.params.id, {
			$pull: { dishWashing: req.body },
		});
		res.json(user);
		console.log(user);
	} catch (err) {
		console.error(err);
		res.status(400).json("Not pull Dish User");
	}
};
