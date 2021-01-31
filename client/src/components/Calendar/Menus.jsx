import React from "react";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	icons: {
		color: "red",
	},
	text: {
		maxHeight: "25px",
		marginBottom: "7px",
	},
}));

const Menus = (props) => {
	const { meal, deleteButton } = props;
	const classes = useStyles();
	return (
		<Grid item xs={12} md={6}>
			<Grid container justify="center">
				<RestaurantIcon style={{ color: "lightblue" }} />
				<Typography variant="h5">Today's menu</Typography>
				<RestaurantIcon style={{ color: "lightblue" }} />
			</Grid>
			{meal.menus.length === 0 ? (
				<Grid container justify="center">
					<Typography
						variant="subtitle1"
						style={{ marginTop: "15px", marginBottom: "30px" }}>
						現在、メニューはまだ作成されていません。
					</Typography>
				</Grid>
			) : (
				<Grid container justify="center">
					<Grid item xs={12} sm={8}>
						<div>
							<List>
								{meal.menus.map((m) => (
									<ListItem key={m.menu} className={classes.text}>
										<ListItemIcon>
											<LocalDiningIcon />
										</ListItemIcon>
										<ListItemText primary={m.menu} />
										<IconButton
											edge="end"
											aria-label="delete"
											onClick={() => deleteButton(meal._id, m.menu)}>
											<Tooltip title="削除">
												<DeleteForeverIcon className={classes.icons} />
											</Tooltip>
										</IconButton>
									</ListItem>
								))}
							</List>
						</div>
					</Grid>
				</Grid>
			)}
		</Grid>
	);
};

export default Menus;
