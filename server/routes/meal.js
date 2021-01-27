const express = require("express");
const router = express.Router();
const {
  createMeal,
  getAllMeals,
  getMeal,
  getMealByDate,
  updateMeal,
  removeMeal } = require("../controllers/meal");


router.get("/meals", getAllMeals);
router.get("/meal/:id", getMeal);
router.get('/meal/date/:date', getMealByDate)
router.post("/meal", createMeal);
router.put("/mealedit/:date",updateMeal)
router.delete("/meal/:id", removeMeal);

module.exports = router;
