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
import Container from "@material-ui/core/Container";
import { toast } from "react-toastify";

const Calendar = () => {
	const initialDate = dateChange(new Date());
	const japanDate = japaneseDateChange(new Date());
	const [selectedDate, setSelectedDate] = useState(initialDate);
	const [japaneseDate, setJapaneseDate] = useState(japanDate);
	const [getMeals, setGetMeals] = useState([]);
	const [menu, setMenu] = useState("");
	const [error, setError] = useState("");

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
		if (menu === "") {
			setError("メニューが入力されていません。");
			return false;
		} else {
			createMenu(id, menu).then((res) => {
				//console.log(res.data);
				toast.success(`メニューに${menu}を作成しました。`);
				callMeals();
				setMenu("");
				setError("");
			});
		}
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
			callMeals();
		});
	};

	useEffect(() => {
		callMeals();
	}, [selectedDate]);

	return (
		<Container maxWidth="md">
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
					error={error}
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
		</Container>
	);
};

export default Calendar;
