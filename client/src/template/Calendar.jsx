import React, { useState } from "react";
import { getTestMealMessage } from "../functions/meal";

const Calendar = () => {
	const [test, setTest] = useState("");
	const setMeals = () => {
		getTestMealMessage().then((res) => {
			//console.log(res.data.testMessage);
			setTest(res.data.testMessage);
		});
	};
	const resetMessage = () => {
		setTest("");
	};
	return (
		<div>
			<p>カレンダーページです</p>
			<button onClick={setMeals}>Message</button>
			<button onClick={resetMessage}>reset</button>
			{test}
		</div>
	);
};

export default Calendar;
