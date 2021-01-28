const express = require("express");
const router = express.Router();
const {
	createMeal,
	getAllMeals,
	getMealByDate,
	updateMeal,
	removeMeal,
	addUser,
	pullUser,
} = require("../controllers/meal");

router.get("/meals", getAllMeals);
router.get("/meal/date/:date", getMealByDate);
router.post("/meal", createMeal);
router.put("/mealedit/:id", updateMeal);
router.delete("/meal/:id", removeMeal);
router.put("/meal/users/:id", addUser);
router.put("/meal/pull-users/:id", pullUser);

module.exports = router;
