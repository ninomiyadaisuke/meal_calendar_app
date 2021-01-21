import React from 'react'
import { TextField } from "@material-ui/core"

const InputMeal = (props) => {
  const {click,onChange } = props
  return (
    <>
      <div>
        <TextField type="text" placeholder="メイン" onChange={onChange}/>
      </div>
      <div>
        <button onClick={click}>追加</button>
      </div>      
    </>


  )
}

export default InputMeal
