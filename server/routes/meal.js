const express = require("express");
const router = express.Router();
const { createMeal, allGetMeals, removeMeal } = require("../controllers/meal");


router.get("/meals", allGetMeals);
router.post("/meal", createMeal);
router.delete("/meal/:id", removeMeal);

module.exports = router;
