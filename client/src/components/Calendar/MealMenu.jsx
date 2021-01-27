import React, { useState } from 'react'
import { deleteMeals, getAllMeals } from "../../functions/meal"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { TextField } from "@material-ui/core"
// import { updateMeal } from "../../functions/meal"

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
  const [open, setOpen] = useState(false);
  const { meals, values, setGetMeals,onChange, } = props

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const updateButton = (id) => {
  //   updateMeal(id, values).then(res => {
  //     console.log(res.data);
  //   })
  //   setOpen(false)  
  // }
  //今後実装予定

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
                <div>
                  <TextField name="main" type="text" placeholder="メイン" onChange={onChange}/>
                </div>
                <div>
                  <TextField name="rice" type="text" placeholder="ライス" onChange={onChange}/>
                </div> 
                <div>
                  <TextField name="soup" type="text" placeholder="スープ" onChange={onChange}/>
                </div> 
                <div>
                  <TextField name="subMenu1" type="text" placeholder="副菜" onChange={onChange}/>
                </div>  
                <div>
                  <TextField name="subMenu2" type="text" placeholder="副菜" onChange={onChange}/>
                </div>   
                <div>
                  <TextField name="subMenu3" type="text" placeholder="副菜" onChange={onChange}/>
                </div>           
                <div>
                  {/* <button onClick={() => updateButton(meal._id)}>追加</button> */}
                  {/* 今後実装予定 */}
                </div>        
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
