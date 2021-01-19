import React, { useState } from "react";
import { getTestMessage } from "../functions/buyList";

const BuyList = () => {
	const [message, setMessage] = useState("");
	const resetMessage = () => {
		setMessage("");
	};
	const getMessage = () => {
		getTestMessage()
			.then((res) => {
				//console.log(res.data.testMessage);
				setMessage(res.data.testMessage);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<p>買い物リストページです</p>
			<button onClick={getMessage}>Message</button>
			<button onClick={resetMessage}>reset</button>
			<p>{message}</p>
		</div>
	);
};


    
export default BuyList;
