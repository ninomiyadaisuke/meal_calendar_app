import axios from "axios";
import { BaseUrl } from "../config"

//新規アイテムの作成
export const createUserList = async (name) => {
	const user = await axios.post(`${BaseUrl}/userlist`, { name });
	return user
};

export const getUsers = async () => {
	const users = await axios.get(`${BaseUrl}/users`);
	return users
};

