import React from "react";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
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
			<h2>本日のメニュー</h2>
			{meal.menus.length === 0 ? (
				<p>現在メニューまだ作成されていません。</p>
			) : (
				<Grid item xs={12} md={6}>
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
										<DeleteForeverIcon className={classes.icons} />
									</IconButton>
								</ListItem>
							))}
						</List>
					</div>
				</Grid>
			)}
		</Grid>
	);
};

export default Menus;
