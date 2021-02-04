import React　from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Card  from '@material-ui/core/card';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
	root: {
	  minWidth: 300,
	  backgroundColor: "#E0E0E0",
	},
	text: {
	  color:"primary",
	  marginLeft:"20px",
	},
	button: {
		color:"black",
	}
});

const RemoveUser = (props) => {
  
 const {removeClick, user} = props;
 const classes = useStyles();
 	return (
    	<>
			<div>
				<Card className={classes.root} style={{width:"100px",margin:"5px auto"}}>
					<ListItem key={user._id} variant="contained">
						<PersonIcon　style={{ fontSize: 30 }}></PersonIcon>
						<ListItemText　className={classes.text} primary={user.name}/>
						<IconButton
							onClick={() => removeClick(user._id)}
							className={classes.button}
							>
							<DeleteIcon style={{ fontSize: 25 }}/>
						</IconButton>
					</ListItem>
				</Card>
    		</div>
		</>
  );
};

export default RemoveUser
