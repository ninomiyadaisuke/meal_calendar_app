import React from "react";
import {
	deleteMenus,
	pullToUser,
	washUser,
	pullWashUser,
	removeMeal,
} from "../../functions/meal";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Menus, Eaters } from "./index";
import Button from "@material-ui/core/Button";

const MealMenu = (props) => {
	const { callMeals, meals, japaneseDate } = props;

	const pulledUser = (id, name) => {
		if (window.confirm("食べないに変更しますか？")) {
			pullToUser(id, name).then((res) => {
				pullWashUser(id, name).then((res) => {
					callMeals();
				});
			});
		}
	};

	const cleanDish = (id, name) => {
		if (window.confirm(`${name}さんを当番に追加しますか？`)) {
			washUser(id, name).then((res) => {
				callMeals();
			});
		}
	};

	const pullDishWashing = (id, name) => {
		if (window.confirm(`${name}さんを当番から外しますか？`)) {
			pullWashUser(id, name).then((res) => {
				callMeals();
			});
		}
	};

	const deleteButton = (id, menu) => {
		//console.log(id, menu);
		if (window.confirm("本当に削除しますか？")) {
			deleteMenus(id, menu).then((res) => {
				//console.log(res.data);
				callMeals();
			});
		}
	};

	const deleteMeal = (id) => {
		if (window.confirm(`${japaneseDate}のまかないをお休みに変更しますか？`)) {
			removeMeal(id).then((res) => {
				callMeals();
			});
		}
	};

	return (
		<div>
			{meals.length > 0 ? (
				meals.map((meal) => (
					<React.Fragment key={meal._id}>
						<Grid container justify="center">
							<Button
								style={{ margin: "0 auto" }}
								onClick={() => deleteMeal(meal._id)}
								color="secondary">
								まかないをお休みに変更
							</Button>
						</Grid>
						<Grid container justify="center">
							<Menus meal={meal} deleteButton={deleteButton} />
							<Eaters
								meal={meal}
								cleanDish={cleanDish}
								pulledUser={pulledUser}
								pullDishWashing={pullDishWashing}
							/>
						</Grid>
					</React.Fragment>
				))
			) : (
				<Grid container justify="center">
					<Typography
						variant="subtitle1"
						gutterBottom
						style={{
							marginTop: "30px",
						}}>{`${japaneseDate}のまかないはお休みです。`}</Typography>
				</Grid>
			)}
		</div>
	);
};

export default MealMenu;
