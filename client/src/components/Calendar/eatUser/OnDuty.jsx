import React from "react";
import Chip from "@material-ui/core/Chip";

const OnDuty = (props) => {
	const { user, pullDishWashing, meal } = props;
	return (
		<Chip
			style={{ marginRight: "3px", marginBottom: "5px" }}
			label={user.name}
			clickable
			color="secondary"
			variant="default"
			onDelete={() => pullDishWashing(meal._id, user.name)}
		/>
	);
};

export default OnDuty;
