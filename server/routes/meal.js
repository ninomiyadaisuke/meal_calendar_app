const express = require("express");
const router = express.Router();
const { createMeal, allGetMeals, removeMeal, getMealByDate } = require("../controllers/meal");


router.get("/meals", allGetMeals);
router.post("/meal", createMeal);
router.get('/meal/date/:date', getMealByDate)
router.delete("/meal/:id", removeMeal);

module.exports = router;
