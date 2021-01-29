import React from "react";
import {
	deleteMenus,
	pullToUser,
	washUser,
	pullWashUser,
} from "../../functions/meal";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	typography: {
		padding: theme.spacing(2),
	},
}));

const MealMenu = (props) => {
	const classes = useStyles();
	const { callMeals, meals, setGetMeals } = props;

	const pulledUser = (id, name) => {
		if (window.confirm("食べないに変更しますか？")) {
			pullToUser(id, name).then((res) => {
				callMeals();
			});
		}
	};

	const cleanDish = (id, name) => {
		if (window.confirm(`${name}さんを当番に追加しますか？`)) {
			washUser(id, name).then((res) => {
				alert(`${name}さんを当番に追加しました。`);
				callMeals();
			});
		}
	};

	const pullDishWashing = (id, name) => {
		if (window.confirm(`${name}さんを当番から外しますか？`)) {
			pullWashUser(id, name).then((res) => {
				alert(`${name}さんを当番から外しました。`);
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

	return (
		<div>
			{meals.length > 0 ? (
				meals.map((meal) => (
					<div key={meal._id}>
						<h2>本日のメニュー</h2>
						<ul>
							{meal.menus.length === 0 ? (
								<p>現在メニューは作成されていません。</p>
							) : (
								meal.menus.map((m) => (
									<li key={m.menu}>
										{m.menu}
										<span>
											<button onClick={() => deleteButton(meal._id, m.menu)}>
												削除
											</button>
										</span>
									</li>
								))
							)}
						</ul>
						<br />
						{meal.users.length === 0 ? (
							""
						) : (
							<p>{meal.users.length}人が喫食予定です。</p>
						)}

						<h3>本日の喫食者</h3>
						{meal.users.length === 0 ? (
							<p>本日の喫食者はいません。</p>
						) : (
							meal.users.map((user) => (
								<React.Fragment key={user.name}>
									<Chip
										label={user.name}
										clickable
										color="secondary"
										variant="outlined"
									/>
									<div className={classes.typography}>
										<p>{`${user.name}さんのメニュー`}</p>
										<button onClick={() => pulledUser(meal._id, user.name)}>
											食べないに変更
										</button>
										<button onClick={() => cleanDish(meal._id, user.name)}>
											食器洗い当番に追加
										</button>
									</div>
								</React.Fragment>
							))
						)}
						<h3>当番</h3>
						{meal.dishWashing.length === 0 ? (
							<p>現在の当番はいません。</p>
						) : (
							meal.dishWashing.map((u) => (
								<Chip
									key={u.name}
									label={u.name}
									clickable
									color="secondary"
									variant="outlined"
									onClick={() => pullDishWashing(meal._id, u.name)}
								/>
							))
						)}
						<h3>従業員一覧</h3>
						<p>{meal.date}の昼食は食べますか？</p>
					</div>
				))
			) : (
				<p>現在メニューはありません</p>
			)}
		</div>
	);
};

export default MealMenu;
