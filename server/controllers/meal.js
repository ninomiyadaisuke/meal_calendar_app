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

exports.getMeal = async (req, res) => {
	try {
		getMealId = await Meal.findOne({ _id: req.params.id })
		res.json(getMealId)
	} catch(err) {
		console.log(err);
res.status(400).json('Not Get Buylist')
	}
}


exports.getMealByDate = async (req, res) => {

	try {
		const date = req.params.date
		const findDate = await Meal.find({date}).exec();
		res.json(findDate);
		console.log(findDate);
	} catch (err) {
		console.log(err);
		res.status(400).json('Not Found!')
	}
	
};

// exports.updateMeal = async (req, res) => {
// 	try { 
// 		const {item, count} = req.body
// 		const updateBuylist = await Meal.findOneAndUpdate(
// 			req.params._id ,
// 			{item, count}, 
// 			{ new: true })
// 			.exec()
// 		res.json(updateBuylist)
// 	} catch (err) {
// 		console.log(err);
//     res.status(400).json('Not Updated')
// }
	
// }

exports.removeMeal = async (req, res) => {
	try { 
		const removeMeal = await Meal.findOneAndDelete( req.params.id ).exec()
		res.json(removeMeal)
	} catch (err) {
		console.log(err);
    res.status(400).json('Not Deleted')
  }
}

