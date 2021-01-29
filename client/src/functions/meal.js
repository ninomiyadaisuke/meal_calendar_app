import axios from "axios";
import { BaseUrl } from "../config";

export const createMeal = async (date) => {
	const meal = await axios.post(`${BaseUrl}/meal`, { date });
	return meal;
};

export const createMenu = async (id, menu) => {
	//console.log(date, menu);
	const menus = await axios.put(`${BaseUrl}/meal/menu/${id}`, { menu });
	return menus;
};

export const deleteMenus = async (id, menu) => {
	const deleteMenu = await axios.put(`${BaseUrl}/meal/menu/pull/${id}`, {
		menu,
	});
	return deleteMenu;
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

export const updateMeal = async (id, values) => {
	const updateMeal = await axios.put(`${BaseUrl}/mealedit/${id}`, values);
	return updateMeal;
};

export const addToUser = async (id, name, eating) => {
	//console.log(id, name);
	const user = await axios.put(`${BaseUrl}/meal/users/${id}`, { name, eating });
	return user;
};

export const pullToUser = async (id, name) => {
	//console.log(id, name);
	const pullUser = await axios.put(`${BaseUrl}/meal/pull-users/${id}`, {
		name,
	});
	return pullUser;
};

export const washUser = async (id, name) => {
	//console.log(id, name);
	const user = await axios.put(`${BaseUrl}/meal/dish/users/${id}`, {
		name,
	});
	return user;
};

export const pullWashUser = async (id, name) => {
	//console.log(id, name);
	const pullUser = await axios.put(`${BaseUrl}/meal/undish/users/${id}`, {
		name,
	});
	return pullUser;
};
