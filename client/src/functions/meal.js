import axios from "axios";
import { BaseUrl } from "../config"

export const getMealAll = async () => {
	const meals = await axios.get(`${BaseUrl}/meals`)
	return meals
}
