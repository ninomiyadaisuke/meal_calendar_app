import React from 'react'


const InputField = (props) => {

  const {handleChange, handleClick, name} = props
  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
			<button onClick={handleClick}>ユーザーを作成</button> 
    </>
  )
}

export default InputField
