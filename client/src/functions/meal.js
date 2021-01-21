import axios from "axios";
import { BaseUrl } from "../config"

export const createMeal = async (main, date) => {
	const meal = await axios.post(`${BaseUrl}/meal`, { main:main, date:date})
	return meal
}

export const getAllMeals = async () => {
	const meals = await axios.get(`${BaseUrl}/meals`)
	return meals
}

