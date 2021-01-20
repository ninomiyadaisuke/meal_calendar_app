const express = require("express");
const router = express.Router();
const { test, createMeal, allGetMeals } = require("../controllers/meal");

router.get("/meals/test", test);
router.get("/meals", allGetMeals);
router.post("/meal", createMeal);

module.exports = router;
