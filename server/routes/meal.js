const express = require("express");
const router = express.Router();
const {
	createMeal,
	deleteMeal,
	getAllMeals,
	getMealByDate,
	removeMenu,
	addUser,
	pullUser,
	dishUser,
	pullDishUser,
	addMenu,
} = require("../controllers/meal");

router.get("/meals", getAllMeals);
router.get("/meal/date/:date", getMealByDate);
router.post("/meal", createMeal);
router.put("/meal/menu/:id", addMenu);
router.put("/meal/menu/pull/:id", removeMenu);
router.put("/meal/users/:id", addUser);
router.put("/meal/pull-users/:id", pullUser);
router.put("/meal/dish/users/:id", dishUser);
router.put("/meal/undish/users/:id", pullDishUser);
router.delete("/meal/:id", deleteMeal);

module.exports = router;
