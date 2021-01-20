import axios from "axios";
import {BaseUrl} from "../config"

export const getTestMessage = async () => {
	const message = await axios.get(`${BaseUrl}/buys/test`);
	return message;
};

export const getAllBuylist = async () => {
	const buylists = await axios.get(`${BaseUrl}/buylists`);
	return buylists;
};

export const createBuyList = async (item, count) => {
	const buylist = await axios.post(`${BaseUrl}/buylist`, { item: item, count: count });
	return buylist
};

