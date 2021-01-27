import React, { useState, useEffect } from "react";
import { InputField, RemoveUser } from '../components/userList'
import {getUsers, createUserList, removeUserList} from '../functions/userList';



const UserList = () => {
	
	const [name, setName] = useState("");
	const [userList, setUserList] = useState([])
	

	useEffect(() => {
    loadUsers()
	}, [])

	//getUsers関数の呼び出し
	const loadUsers = () => {
		getUsers().then((res) => {
			setUserList(res.data)
			//console.log(res.data);
		})
	}

	  //新規作成
		const handleChange = (e) => {
			setName(e.target.value)
			//console.log(name);
		}
		const handleClick = () => {
			//console.log(name);
			createUserList(name).then((res) => {
				alert(`${res.data.name}作成できました`)
				setName("")
				loadUsers()
			})
		}
		
	
	//削除
	const removeClick = (id) => {
 		removeUserList(id).then((res) => {
			alert(`${res.data.name}削除しました`)
			loadUsers()
    })
	}

	return (
		<div>
			<InputField
				handleChange={handleChange}
				handleClick={handleClick}
				name={name}
			/>
			{/* {JSON.stringify(userList)} */}
			{userList && userList.map((user) => (
				<RemoveUser
					user={user}
				  removeClick={removeClick}
			  />
			))}
			
		</div>
	);
};

export default UserList;
