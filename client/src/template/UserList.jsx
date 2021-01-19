import React, { useState } from "react";
import { getTestUserMessage } from "../functions/userList";

const UserList = () => {
	const [test, setTest] = useState("");
	const setMeals = () => {
		getTestUserMessage().then((res) => {
			//console.log(res.data.testMessage);
			setTest(res.data.testMessage);
		});
	};
	const resetMessage = () => {
		setTest("");
	};
	return (
		<div>
			<p>ユーザーリストページです</p>
			<button onClick={setMeals}>Message</button>
			<button onClick={resetMessage}>reset</button>
			{test}
		</div>
	);
};

export default UserList;
