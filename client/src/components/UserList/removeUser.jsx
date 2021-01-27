import React　from 'react'


const RemoveUser = (props) => {
  
 const { removeClick, user} = props
  return (
    <>
			<div key={user._id}>
				<p>名前</p>
				<p >{ user.name}</p>
				<button onClick={() => removeClick(user._id)}>削除</button>
			</div>
    </>
  )
}

export default RemoveUser
