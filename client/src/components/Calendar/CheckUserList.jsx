import React, { useEffect, useState } from "react";
import { getUsers } from "../../functions/userList";
import { addToUser } from "../../functions/meal";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";

const CheckUserList = ({ meals, callMeals, japanDate }) => {
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
			{meals.length > 0 ? (
				<>
					<Grid container justify="center">
						<h3>従業員一覧</h3>
					</Grid>
					<Grid container justify="center">
						<p>{japanDate}の昼食は食べますか？</p>
					</Grid>
				</>
			) : (
				""
			)}
			{meals.length > 0
				? userList.map((user) => (
						<React.Fragment key={user._id}>
							<Chip
								style={{ marginRight: "3px", marginBottom: "5px" }}
								label={`${user.name}(今日は食べる)`}
								clickable
								color="default"
								variant="default"
								onClick={() => addedUser(meals[0]._id, user.name)}
							/>
						</React.Fragment>
				  ))
				: ""}
		</div>
	);
};

export default CheckUserList;
