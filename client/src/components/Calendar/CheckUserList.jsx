import React, { useEffect, useState } from "react";
import { getUsers } from "../../functions/userList";
import { addToUser } from "../../functions/meal";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import DoneIcon from "@material-ui/icons/Done";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

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
						<Typography variant="h5" style={{ marginTop: "30px" }}>
							Member list
						</Typography>
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
						<Tooltip title="食べるに追加" key={user._id}>
							<Chip
								style={{ marginRight: "3px", marginBottom: "5px" }}
								icon={
									<HiOutlineEmojiHappy
										style={{ width: "20px", height: "20px" }}
									/>
								}
								label={user.name}
								onDelete={() => addedUser(meals[0]._id, user.name)}
								deleteIcon={<DoneIcon />}
								clickable
								color="default"
								variant="default"
								onClick={() => addedUser(meals[0]._id, user.name)}
							/>
						</Tooltip>
				  ))
				: ""}
		</div>
	);
};

export default CheckUserList;
