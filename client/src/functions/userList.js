import axios from "axios";

export const getTestUserMessage = async () => {
	const message = await axios.get("http://localhost:8000/api/v1/users/test");
	return message;
};
