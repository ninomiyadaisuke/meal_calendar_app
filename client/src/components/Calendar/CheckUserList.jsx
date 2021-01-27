import React, { useEffect, useState } from 'react'
import { getUsers, updateUserList } from "../../functions/userList"
import Checkbox from '@material-ui/core/Checkbox';

const CheckUserList = (props) => {
  const [userList, setUserList] = useState([])
  const [checked, setChecked] = useState(true);
  const [count, setCount] = useState(0)


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const loadUsers = () => {
    getUsers().then(res => {
      // console.log(res.data.length - 1); 
      setCount(res.data.length)
      setUserList(res.data)
    })
  }

  useEffect(() => {
    loadUsers()
  },[])
  return (
    <div>
      {userList.map((user) => (
        <div key={user._id}>
          <p>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            {user.name}
          </p>
          <button onClick={()=> updateUserList(user._id)}>更新</button>
        </div>
      ))}
      <p>{count}</p>
    </div>
  )
}

export default CheckUserList
