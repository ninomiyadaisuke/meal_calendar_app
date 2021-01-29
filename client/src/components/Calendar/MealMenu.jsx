import React, { useState } from "react";
import {
	deleteMeals,
	getAllMeals,
	pullToUser,
	washUser,
	pullWashUser,
} from "../../functions/meal";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { TextField } from "@material-ui/core";
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
	const [open, setOpen] = useState(false);
	const { callMeals, meals, setGetMeals, onChange } = props;

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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

	const deleteButton = (id) => {
		// console.log(id);
		if (window.confirm("本当に削除しますか？")) {
			deleteMeals(id).then((res) => {
				getAllMeals().then((res) => {
					setGetMeals(res);
					window.location.reload();
				});
			});
		} else {
			return false;
		}
	};

	return (
		<div>
			{meals.length > 0 ? (
				meals.map((meal) => (
					<div key={meal._id}>
						<p>{meal.date}</p>
						<p>{meal.main}</p>
						<p>{meal.rice}</p>
						<p>{meal.soup}</p>
						<p>{meal.subMenu1}</p>
						<p>{meal.subMenu2}</p>
						<p>{meal.subMenu3}</p>
						<p>{meal.users.length}人</p>
						<button type="button" onClick={handleOpen}>
							編集
						</button>
						<button
							onClick={() => {
								deleteButton(meal._id);
							}}>
							削除
						</button>
						<br />
						<h3>本日の喫食者</h3>
						{meal.users &&
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
							))}
						<h3>当番</h3>
						{meal.dishWashing.map((u) => (
							<Chip
								key={u.name}
								label={u.name}
								clickable
								color="secondary"
								variant="outlined"
								onClick={() => pullDishWashing(meal._id, u.name)}
							/>
						))}
						<h3>従業員一覧</h3>
						<p>{meal.date}の昼食は食べますか？</p>
						<Modal
							aria-labelledby="transition-modal-title"
							aria-describedby="transition-modal-description"
							className={classes.modal}
							open={open}
							onClose={handleClose}
							closeAfterTransition
							BackdropComponent={Backdrop}
							BackdropProps={{
								timeout: 500,
							}}>
							<Fade in={open}>
								<div className={classes.paper}>
									<div>
										<TextField
											name="main"
											type="text"
											placeholder="メイン"
											onChange={onChange}
										/>
									</div>
									<div>
										<TextField
											name="rice"
											type="text"
											placeholder="ライス"
											onChange={onChange}
										/>
									</div>
									<div>
										<TextField
											name="soup"
											type="text"
											placeholder="スープ"
											onChange={onChange}
										/>
									</div>
									<div>
										<TextField
											name="subMenu1"
											type="text"
											placeholder="副菜"
											onChange={onChange}
										/>
									</div>
									<div>
										<TextField
											name="subMenu2"
											type="text"
											placeholder="副菜"
											onChange={onChange}
										/>
									</div>
									<div>
										<TextField
											name="subMenu3"
											type="text"
											placeholder="副菜"
											onChange={onChange}
										/>
									</div>
									<div>
										{/* <button onClick={() => updateButton(meal._id)}>追加</button> */}
										{/* 今後実装予定 */}
									</div>
								</div>
							</Fade>
						</Modal>
					</div>
				))
			) : (
				<p>現在メニューはありません</p>
			)}
		</div>
	);
};

export default MealMenu;
