import React from 'react'
import { TextField } from "@material-ui/core"

const InputMeal = (props) => {
  const {click,onChange } = props
  return (
    <>      
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
        <button onClick={click}>追加</button>
      </div>      
    </>


  )
}

export default InputMeal
