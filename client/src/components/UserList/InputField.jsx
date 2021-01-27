import React from 'react'
import {createUserList} from '../../functions/userList'


const InputField = (props) => {

  const {handleChange, handleClick} = props
  return (
    <>
      <input type="text" onChange={handleChange} />
			<button onClick={handleClick}>ユーザーを作成</button> 
    </>
  )
}

export default InputField
