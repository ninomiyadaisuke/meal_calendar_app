import React, { useEffect, useState } from "react";
import { getUsers } from "../../functions/userList";
import { addToUser } from "../../functions/meal";
import Chip from "@material-ui/core/Chip";

const CheckUserList = ({ meals, callMeals }) => {
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		loadUsers();
	}, []);

	const loadUsers = () => {
		getUsers().then((res) => {
			// console.log(res.data.length - 1);
			setUserList(res.data);
		});
	};

	const addedUser = (id, name) => {
		if (window.confirm("食べるに変更しますか？")) {
			addToUser(id, name).then((res) => {
				// console.log(eating);
				callMeals();
				//console.log(res.data.users);
			});
		}
	};

	return (
		<div>
			{meals.length > 0
				? userList.map((user) => (
						<>
							<Chip
								key={user._id}
								label={`${user.name}(今日は食べる)`}
								clickable
								color="primary"
								variant="outlined"
								onClick={() => addedUser(meals[0]._id, user.name)}
							/>
						</>
				  ))
				: ""}
		</div>
	);
};

export default CheckUserList;
