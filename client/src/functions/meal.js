import axios from "axios";
import { BaseUrl } from "../config"

export const createMeal = async (dateValues) => {
	const meal = await axios.post(`${BaseUrl}/meal`,dateValues ) 
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
