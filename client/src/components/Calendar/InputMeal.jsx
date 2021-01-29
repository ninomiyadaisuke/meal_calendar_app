import React from "react";
import { TextField } from "@material-ui/core";

const InputMeal = (props) => {
	const { click, onChange, meals, menu } = props;
	return (
		<>
			{meals.length === 1 ? (
				<>
					<div>
						<TextField
							type="text"
							placeholder="メニューを入力"
							onChange={onChange}
							value={menu}
						/>
					</div>
					<div>
						<button onClick={click}>追加</button>
					</div>
				</>
			) : (
				""
			)}
		</>
	);
};

export default InputMeal;
