import axios from "axios";
import { BaseUrl } from "../config";

export const createMeal = async (dateValues) => {
	const meal = await axios.post(`${BaseUrl}/meal`, dateValues);
	return meal;
};

export const getMealDate = async (selectedDate) => {
	const findDate = await axios.get(`${BaseUrl}/meal/date/${selectedDate}`, {
		date: selectedDate,
	});
	return findDate;
};

export const getAllMeals = async () => {
	const meals = await axios.get(`${BaseUrl}/meals`);
	return meals;
};

export const deleteMeals = async (id) => {
	const deleteMeal = await axios.delete(`${BaseUrl}/meal/${id}`);
	return deleteMeal;
};

export const updateMeal = async (id, values) => {
	const updateMeal = await axios.put(`${BaseUrl}/mealedit/${id}`, values);
	return updateMeal;
};

export const addToUser = async (id, name) => {
	console.log(id, name);
	const user = await axios.put(`${BaseUrl}/meal/users/${id}`, { name });
	return user;
};

export const pullToUser = async (id, name) => {
	console.log(id, name);
	const pullUser = await axios.put(`${BaseUrl}/meal/pull-users/${id}`, {
		name,
	});
	return pullUser;
};
