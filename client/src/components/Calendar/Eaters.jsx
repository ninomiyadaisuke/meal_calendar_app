import React from "react";
import Grid from "@material-ui/core/Grid";
import { EatUser, OnDuty } from "./eatUser";

const Eaters = (props) => {
	const { meal, cleanDish, pullDishWashing, pulledUser } = props;
	return (
		<Grid item xs={12} md={6}>
			<Grid container justify="center">
				<h3>本日の喫食者</h3>
			</Grid>

			{meal.users.length === 0 ? (
				<Grid container justify="center">
					<p>本日の喫食者はいません。</p>
				</Grid>
			) : (
				meal.users.map((user) => (
					<EatUser
						key={user.name}
						user={user}
						meal={meal}
						cleanDish={cleanDish}
						pulledUser={pulledUser}
					/>
				))
			)}
			{meal.users.length === 0 ? (
				""
			) : (
				<Grid container justify="center">
					<h3>
						<span style={{ color: "red" }}>{meal.users.length}</span>
						人が喫食予定です。
					</h3>
				</Grid>
			)}
			<Grid container justify="center">
				<h3>当番</h3>
			</Grid>

			{meal.dishWashing.length === 0 ? (
				<Grid container justify="center">
					<p>現在の当番はいません。</p>
				</Grid>
			) : (
				meal.dishWashing.map((u) => (
					<OnDuty
						key={u.name}
						user={u}
						pullDishWashing={pullDishWashing}
						meal={meal}
					/>
				))
			)}
		</Grid>
	);
};

export default Eaters;
