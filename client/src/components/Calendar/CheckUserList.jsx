import React, { useEffect, useState } from "react";
import { getUsers } from "../../functions/userList";
import { addToUser, pullToUser } from "../../functions/meal";
import Checkbox from "@material-ui/core/Checkbox";

const CheckUserList = ({ meals, callMeals }) => {
	const [userList, setUserList] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		loadUsers();
	}, []);

	const loadUsers = () => {
		getUsers().then((res) => {
			// console.log(res.data.length - 1);
			setCount(res.data.length);
			setUserList(res.data);
		});
	};

	const addedUser = (id, name) => {
		addToUser(id, name).then((res) => {
			callMeals();
			//console.log(res.data.users);
		});
	};

	const pulledUser = (id, name) => {
		pullToUser(id, name).then((res) => {
			callMeals();
			//console.log(res.data.users);
		});
	};

	return (
		<div>
			{userList.map((user) => (
				<>
					<div key={user._id}>
						<p>
							<Checkbox
								defaultChecked
								color="primary"
								inputProps={{ "aria-label": "secondary checkbox" }}
							/>
							{user.name}
						</p>
						<button onClick={() => addedUser(meals[0]._id, user.name)}>
							食べる
						</button>
						<button onClick={() => pulledUser(meals[0]._id, user.name)}>
							食べない
						</button>
					</div>
				</>
			))}
			<p>{count}</p>
		</div>
	);
};

export default CheckUserList;
