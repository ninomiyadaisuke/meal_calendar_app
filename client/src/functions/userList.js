import axios from "axios";
import { BaseUrl } from "../config"

//新規アイテムの作成
export const createUserList = async (name) => {
	const user = await axios.post(`${BaseUrl}/userlist`, {name} );
	return user
};

export const getUsers = async () => {
	const users = await axios.get(`${BaseUrl}/users`);
	return users
};

export const removeUserList = async (id) => {
	const user = await axios.delete(`${BaseUrl}/user/delete/${id}`);
	return user
	//console.log(id);
};


export const updateUserList = async (id) => {
	const updateUser = await axios.put(`${BaseUrl}/update/user/${id}`);
	return updateUser
	//console.log(id);
};
