import React, { useEffect, useState } from "react"
import { DatePicker, MealMenu, UserCheckList } from "../components/Calendar"
import { getMealAll } from "../functions/meal"


const Calendar = () => {
	const [getMeals, setGetMeals] = useState([])

	const callMeals = () => {
		getMealAll().then((res) => {
			setGetMeals(res.data)
		})
	}


	useEffect(() => {
		callMeals()
	},[])


	return (
		<>
			
			<DatePicker />
			<MealMenu meals={getMeals}/>
			<UserCheckList />
		</>

	);
};

export default Calendar;