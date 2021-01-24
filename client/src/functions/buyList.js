import axios from "axios";
import { BaseUrl } from "../config"

//全てのアイテムの取得
export const getAllBuylist = async () => {
	const buylists = await axios.get(`${BaseUrl}/buylists`);
	return buylists;
};

//dateに応じて指定のアイテムの取得
export const getBuylistByDate = async (selectedDate) => {
	const findDate = await axios.get(`${BaseUrl}/buylists/${selectedDate}`, {date: selectedDate});
	return findDate;
};

//新規アイテムの作成
export const createBuyList = async (item, count, selectedDate) => {
	const buylist = await axios.post(`${BaseUrl}/buylist`, { item: item, count: count, date: selectedDate });
	return buylist
};

//アイテムの削除
export const removeBuyList = async (id) => {
	const buylist = await axios.delete(`${BaseUrl}/buylist/${id}`);
	return buylist
};

//アイテムの更新
export const updateBuyList = async (id, item, count) => {
	const buylist = await axios.put(`${BaseUrl}/buyEdit/${id}`, {item, count});
	return buylist
};

