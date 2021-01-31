import React from "react";
import Grid from "@material-ui/core/Grid";
import { EatUser, OnDuty } from "./eatUser";
import Typography from "@material-ui/core/Typography";

const Eaters = (props) => {
	const { meal, cleanDish, pullDishWashing, pulledUser } = props;
	return (
		<Grid item xs={12} md={6}>
			<Grid container justify="center">
				<Typography variant="h5" style={{ marginBottom: "10px" }}>
					Eating member
				</Typography>
			</Grid>

			{meal.users.length === 0 ? (
				<Grid container justify="center">
					<p>本日まかないを食べる人はいません。</p>
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
					<Typography variant="h6" style={{ marginTop: "10px" }}>
						<span style={{ color: "red" }}>{meal.users.length}</span>
						名が喫食予定です。
					</Typography>
				</Grid>
			)}
			<Grid container justify="center">
				<Typography
					variant="h5"
					style={{ marginTop: "25px", marginBottom: "15px" }}>
					Washing Up
				</Typography>
			</Grid>

			{meal.dishWashing.length === 0 ? (
				<Grid container justify="center">
					<p>本日の皿洗い当番は決まっていません。</p>
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
