import React, { useState } from 'react'
import { deleteMeals, getAllMeals } from "../../functions/meal"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import InputMeal from './InputMeal';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MealMenu = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { meals, initialState, setValues, setGetMeals } = props
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
      setAnchorEl(anchorEl ? null : e.currentTarget);
  };
  

  const deleteButton = (id) => {
    // console.log(id);
    if (window.confirm("本当に削除しますか？")) {
    deleteMeals(id).then(res => {
      getAllMeals().then(res => {
        setGetMeals(res)
        window.location.reload()	
      })})            
    } else {
      return false
    }
  }
  

  return (
    <div>
      {meals.length > 0 ? (meals.map((meal) => (
        <div key={meal._id}>
          <p>{meal.date}</p>
          <p>{meal.main}</p>
          <p>{meal.rice}</p>
          <p>{meal.soup}</p>
          <p>{meal.subMenu1}</p>
          <p>{meal.subMenu2}</p>
          <p>{meal.subMenu3}</p>
          <button type="button" onClick={handleOpen}>
            編集
          </button>
          <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <InputMeal/>
                </div>
              </Fade>
            </Modal>          
          <button onClick={() => { deleteButton(meal._id) }}>削除</button>
        </div>
      ))): <p>現在メニューはありません</p>}
    </div>
  )
}

export default MealMenu
