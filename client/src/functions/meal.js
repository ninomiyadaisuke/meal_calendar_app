import axios from "axios";
import { BaseUrl } from "../config"

export const getTestMealMessage = async () => {
	const message = await axios.get(`${BaseUrl}/test`);
	return message;
};

export const getMealAll = async () => {
	const meals = await axios.get(`${BaseUrl}/meals`)
	return meals
}
