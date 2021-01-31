import React from "react";
import { TextField } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import ErrorIcon from "@material-ui/icons/Error";

const InputMeal = (props) => {
	const { click, onChange, meals, menu, japaneseDate, error } = props;
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
						<Tooltip title="メニューを作成">
							<AddIcon />
						</Tooltip>
					</Fab>
					<Grid style={{ height: "30px" }} container justify="center">
						{error !== "" ? (
							<>
								<ErrorIcon style={{ color: "red" }} />
								<Typography
									variant="subtitle1"
									gutterBottom
									style={{ color: "red" }}>
									{error}
								</Typography>
							</>
						) : (
							""
						)}
					</Grid>
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
