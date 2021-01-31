import React from "react";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CancelIcon from "@material-ui/icons/Cancel";

const EatUser = (props) => {
	const { user, meal, cleanDish, pulledUser } = props;
	return (
		<Chip
			icon={
				<Tooltip title="当番に追加">
					<PersonAddIcon onClick={() => cleanDish(meal._id, user.name)} />
				</Tooltip>
			}
			style={{ marginRight: "3px", marginBottom: "5px" }}
			onDelete={() => pulledUser(meal._id, user.name)}
			label={user.name}
			clickable
			color="primary"
			variant="default"
			deleteIcon={
				<Tooltip title="食べないに変更">
					<CancelIcon />
				</Tooltip>
			}
		/>
	);
};

export default EatUser;
