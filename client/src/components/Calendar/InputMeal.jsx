import React from "react";
import { TextField } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";

const InputMeal = (props) => {
	const { click, onChange, meals, menu, japaneseDate } = props;
	return (
		<>
			{meals.length === 1 ? (
				<Grid container justify="center">
					<TextField
						style={{ marginTop: "10px" }}
						type="text"
						placeholder="メニューを入力"
						onChange={onChange}
						value={menu}
					/>
					<Fab
						style={{ marginLeft: "5px", width: "35px", height: "30px" }}
						color="primary"
						onClick={click}>
						<AddIcon />
					</Fab>
					<Grid container justify="center">
						<Typography variant="h4" style={{ marginTop: "10px" }}>
							{japaneseDate}
						</Typography>
					</Grid>
				</Grid>
			) : (
				""
			)}
		</>
	);
};

export default InputMeal;
