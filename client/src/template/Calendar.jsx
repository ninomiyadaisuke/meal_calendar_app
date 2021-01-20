import React, { useEffect, useState } from "react";
import { SelectMenu } from "../components/Calendar";
import { getTestMealMessage } from "../functions/meal";

const Calendar = () => {
	// const [test, setTest] = useState("");
	// const setMeals = () => {
	// 	getTestMealMessage().then((res) => {
	// 		console.log(res.data.testMessage);
	// 		setTest(res.data.testMessage);
	// 	});
	// };
	// const resetMessage = () => {
	// 	setTest("");
	// };
	// useEffect(() => {
	// 	setMeals()
	// },[])
	return (
		<SelectMenu/>
		// <div>
		// 	<p>カレンダーページです</p>
		// 	<button onClick={setMeals}>Message</button>
		// 	<button onClick={resetMessage}>reset</button>
		// 	{test}
		// </div>
	);
};

export default Calendar;