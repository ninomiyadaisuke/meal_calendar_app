import React from "react"
import { DatePicker, MealMenu, UserCheckList } from "../components/Calendar"


const Calendar = () => {

	return (
		<>
			<DatePicker />
      <MealMenu/>
			<UserCheckList />
		</>

	);
};

export default Calendar;