import React from 'react'
import {deleteMeals,getAllMeals} from "../../functions/meal"

const MealMenu = (props) => {
  const { meals,initialState, setValues,setGetMeals } = props

  const deleteButton = (id) => {
    // console.log(id);
    if (window.confirm("本当に削除しますか？")) {
    deleteMeals(id).then(res => {
      getAllMeals().then(res => {
        setGetMeals(res)
      })
    })            
    } else {
      return false
    }
  }
  
  return (
    <div>
      {meals.length > 0 ? (meals.map((meal) => (
        <div key={meal._id}>
          <p>{meal.main}</p>
          <p>{meal.rice}</p>
          <p>{meal.soup}</p>
          <p>{meal.subMenu1}</p>
          <p>{meal.subMenu2}</p>
          <p>{meal.subMenu3}</p>
          <button onClick={() => {deleteButton(meal._id)}}>削除</button>
        </div>
      ))): <p>現在メニューはありません</p>}
    </div>
  )
}

export default MealMenu
