import axios from "axios";
import { BaseUrl } from "../config"

export const createMeal = async (values) => {
	const meal = await axios.post(`${BaseUrl}/meal`,  values)
	return meal
}

export const getAllMeals = async () => {
	const meals = await axios.get(`${BaseUrl}/meals`)
	return meals
}

export const deleteMeals = async (id) => {
	const deleteMeal = await axios.delete(`${BaseUrl}/meal/${id}`)
	return deleteMeal
}
