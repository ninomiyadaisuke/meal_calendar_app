import React, { useEffect, useState } from "react";
import {
	CheckUserList,
	DatePicker,
	InputMeal,
	MealMenu,
} from "../components/Calendar";
import { createMeal, getMealDate, createMenu } from "../functions/meal";
import { dateChange, japaneseDateChange } from "../functions/formatValue";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

const Calendar = () => {
	const initialDate = dateChange(new Date());
	const japanDate = japaneseDateChange(new Date());
	const [selectedDate, setSelectedDate] = useState(initialDate);
	const [japaneseDate, setJapaneseDate] = useState(japanDate);
	const [getMeals, setGetMeals] = useState([]);
	const [menu, setMenu] = useState("");

	const handleDateChange = (date) => {
		const newDate = dateChange(date);
		const newJDate = japaneseDateChange(date);
		setSelectedDate(newDate);
		setJapaneseDate(newJDate);
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
			alert(`メニューを追加しました`);
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
				<InputMeal
					menu={menu}
					meals={getMeals}
					onChange={handleMenuChange}
					click={addMenu}
					japaneseDate={japaneseDate}
				/>
			) : (
				<Grid container justify="center">
					<Fab
						style={{ marginTop: "25px" }}
						color="primary"
						variant="extended"
						onClick={ClickMeal}>
						{`${japaneseDate}のメニュー表を作成`}
					</Fab>
				</Grid>
			)}
			<MealMenu
				meals={getMeals}
				setGetMeals={setGetMeals}
				callMeals={callMeals}
				menu={menu}
				japaneseDate={japaneseDate}
			/>
			<CheckUserList
				meals={getMeals}
				callMeals={callMeals}
				japanDate={japaneseDate}
			/>
		</>
	);
};

export default Calendar;
