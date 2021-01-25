import React, { useEffect, useState } from "react"
import {DatePicker, InputMeal, MealMenu, UserCheckList } from "../components/Calendar"
import { createMeal, getAllMeals, getMealDate } from "../functions/meal"
import { dateChange } from "../functions/formatValue"


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
	
	const initialDate = dateChange(new Date())
	const [values, setValues] = useState(initialState)
	// const [main, setMain] = useState("")
	const [selectedDate, setSelectedDate] = useState(initialDate);
	const [getMeals, setGetMeals] = useState([])
	
	const handleDateChange = (date) => {
		const newDate = dateChange(date)
		setSelectedDate(newDate)
		console.log(newDate);
  };   

		const ChangeMain = (e) => {
			setValues({ ...values, [e.target.name]: e.target.value })
      console.log(e.target.name, '----', e.target.value);
	}

	const callMeals = () => {
		getMealDate(selectedDate).then((res) => {
			setGetMeals(res.data)
		})
	}
	

	const ClickMeal = () => { 
		const date = selectedDate
		const dateValues = { date, ...values }
		console.log(dateValues);
		createMeal(dateValues)
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
	}, [selectedDate])
	
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