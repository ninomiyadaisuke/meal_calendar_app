import axios from "axios";

export const getTestMessage = async () => {
	const message = await axios.get("http://localhost:8000/api/v1/buys/test");
	return message;
};

