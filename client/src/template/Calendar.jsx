import React, { useEffect, useState } from "react"
import {DatePicker, InputMeal, MealMenu, UserCheckList } from "../components/Calendar"
import { createMeal, getAllMeals } from "../functions/meal"
import { initialDate } from "../functions/initialDate"


const Calendar = () => {
	const initialState = {
	// date: "",
	main: "",
	rice: "",
	soup: "",
	subMenu1: "",
	subMenu2: "",
	subMenu3: "",
}

	const [values, setValues] = useState(initialState)
	// const [main, setMain] = useState("")
	const [selectedDate, setSelectedDate] = useState(initialDate);
	const [getMeals, setGetMeals] = useState([])
	
	const handleDateChange = (date) => {
	const beforeDate = date
	const formatted = `${beforeDate.getFullYear()}-${beforeDate.getMonth() + 1}-${beforeDate.getDate()}`
	.replace(/\n|\r/g, '');
		setSelectedDate(formatted);
		console.log(selectedDate);
  };   

	// const ChangeMain = (e) => {
	// 	setValues(e.target.value)
	// 	console.log(main);
	// }
		const ChangeMain = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
		console.log(e.target.name, '----', e.target.value);
	}

	const callMeals = () => {
		getAllMeals().then((res) => {
			setGetMeals(res.data)
		})
	}

	const ClickMeal = () => {
		console.log(values);
		createMeal(values)
			.then((res) => {
			console.log(values);
				alert(`メニューをを追加しました`)
				callMeals()
			setValues(initialState)
			setSelectedDate(initialDate)
			window.location.reload()	
		})
	}



	useEffect(() => {
		callMeals()
	},[])
	return (
		<>
			<DatePicker handleDateChange={handleDateChange} selectedDate={selectedDate}/>
			<InputMeal main={values} onChange={ChangeMain}  click={ClickMeal}/> 
			<MealMenu meals={getMeals} initialState={initialState} setValues={setValues} setGetMeals={setGetMeals}/> 
			<UserCheckList />
		</>

	);
};

export default Calendar;