import React, { useEffect, useState } from "react";
import {
	CheckUserList,
	DatePicker,
	InputMeal,
	MealMenu,
} from "../components/Calendar";
import { createMeal, getMealDate, createMenu } from "../functions/meal";
import { dateChange } from "../functions/formatValue";

const Calendar = () => {
	const initialDate = dateChange(new Date());
	const [selectedDate, setSelectedDate] = useState(initialDate);
	const [getMeals, setGetMeals] = useState([]);
	const [menu, setMenu] = useState("");

	const handleDateChange = (date) => {
		const newDate = dateChange(date);
		setSelectedDate(newDate);
		//console.log(newDate);
	};

	const handleMenuChange = (e) => {
		setMenu(e.target.value);
		//console.log(menu);
	};

	const addMenu = () => {
		const id = getMeals[0]._id;
		//console.log(menuId);
		createMenu(id, menu).then((res) => {
			//console.log(res.data);
			callMeals();
			setMenu("");
		});
	};

	const callMeals = () => {
		getMealDate(selectedDate).then((res) => {
			setGetMeals(res.data);
			//setMealDayId(res.data[0]._id);
		});
	};

	const ClickMeal = () => {
		const date = selectedDate;
		//console.log(date);
		createMeal(date).then((res) => {
			//console.log(res);
			alert(`メニューをを追加しました`);
			callMeals();
		});
	};

	useEffect(() => {
		callMeals();
	}, [selectedDate]);

	return (
		<>
			<DatePicker
				handleDateChange={handleDateChange}
				selectedDate={selectedDate}
			/>
			{getMeals.length > 0 ? (
				""
			) : (
				<button onClick={ClickMeal}>メニューを作成</button>
			)}
			<InputMeal
				menu={menu}
				meals={getMeals}
				onChange={handleMenuChange}
				click={addMenu}
			/>
			<MealMenu
				meals={getMeals}
				setGetMeals={setGetMeals}
				callMeals={callMeals}
				menu={menu}
			/>
			<CheckUserList meals={getMeals} callMeals={callMeals} />
		</>
	);
};

export default Calendar;
