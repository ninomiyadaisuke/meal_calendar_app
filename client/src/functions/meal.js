import axios from "axios";
import { BaseUrl } from "../config"

export const createMeal = async (dateValues) => {
	const meal = await axios.post(`${BaseUrl}/meal`,dateValues ) 
	return meal   
}

export const getMealDate = async (selectedDate) => {
	const findDate = await axios.get(`${BaseUrl}/meal/date/${selectedDate}`, {date: selectedDate});
	return findDate; 
}

export const getAllMeals = async () => {
	const meals = await axios.get(`${BaseUrl}/meals`)
	return meals
}

export const deleteMeals = async (id) => {
	const deleteMeal = await axios.delete(`${BaseUrl}/meal/${id}`)
	return deleteMeal
}

export const updateMeal = async (id, values) => {
	const updateMeal = await axios.put(`${BaseUrl}/mealedit/${id}`, values);
	return updateMeal
};

