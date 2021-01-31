import React from "react";
import Chip from "@material-ui/core/Chip";
import { GiGingerbreadMan } from "react-icons/gi";

const OnDuty = (props) => {
	const { user, pullDishWashing, meal } = props;
	return (
		<Chip
			icon={<GiGingerbreadMan style={{ width: "20px", height: "20px" }} />}
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
