import axios from "axios";

export const getTestMealMessage = async () => {
	const message = await axios.get("http://localhost:8000/api/v1/meals/test");
	return message;
};
