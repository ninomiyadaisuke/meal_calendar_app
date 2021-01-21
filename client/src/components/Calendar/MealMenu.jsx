import React from 'react'

const MealMenu = (props) => {
  const { meals } = props
  
  return (
    <div>
      {meals.map((meal) => (
        <div key={meal._id}>
          <p>{meal.main}</p>
          <p>{meal.rice}</p>
          <p>{meal.soup}</p>
          {meal.subMenus.map((sub) => (
            <div key={sub._id}>
              <p>{sub.subMenu}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MealMenu
