import React, { useEffect, useState } from "react"
import {DatePicker, InputMeal, MealMenu, UserCheckList } from "../components/Calendar"
import { createMeal, getAllMeals } from "../functions/meal"
import { initialDate } from "../functions/initialDate"

const Calendar = () => {
	const [main, setMain] = useState("")
	const [selectedDate, setSelectedDate] = useState(initialDate);
	const [getMeals, setGetMeals] = useState([])
  console.log(selectedDate);
	const handleDateChange = (date) => {
	const beforeDate = date
	const formatted = `${beforeDate.getFullYear()}-${beforeDate.getMonth() + 1}-${beforeDate.getDate()}`
	.replace(/\n|\r/g, '');
	setSelectedDate(formatted);
  };

	const ChangeMain = (e) => {
		setMain(e.target.value)
		console.log(main);
	}

	const callMeals = () => {
		getAllMeals().then((res) => {
			setGetMeals(res.data)
		})
	}

	const ClickMeal = () => {
		createMeal(main,selectedDate)
			.then((res) => {
			console.log(selectedDate,main);
				alert(`${res.data.main}を追加しました`)
				callMeals()
			setMain("")
			setSelectedDate(initialDate)
				
		})
	}



	useEffect(() => {
		callMeals()
	},[])
	return (
		<>
			<DatePicker  handleDateChange={handleDateChange}/>
			<InputMeal main={main} onChange={ChangeMain} selectedDate={selectedDate} click={ClickMeal}/> 
			<MealMenu meals={getMeals}/>
			<UserCheckList />
		</>

	);
};

export default Calendar;