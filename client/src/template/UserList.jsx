import React, { useState,useEffect } from "react";
import {createUserList, getUsers} from '../functions/userList';


const UserList = () => {
	const [name, setName] = useState("");
	const [userList, setUserList] = useState([])

	useEffect(() => {
    loadUsers()
	},[])
	
	const handleChange = (e) => {
		setName(e.target.value)
		console.log(name);
	}
	const handleClick = () => {
		console.log(name);
		createUserList(name).then((res) => {
			alert(`${res.data.name}作成できました`)
			//console.log(res.data);
			loadUsers()
		})
	}
	const loadUsers = () => {
		getUsers().then((res) => {
			setUserList(res.data)
			console.log(res.data);
		})
	}
	return (
		<div>
			<p>ユーザーリストページです</p>
			<input type="text" onChange={ handleChange}/>
			<button onClick={handleClick}>ユーザーを作成</button>	
			{userList && userList.map((res) => (
				<div key={res._id}>
					<p>名前</p>
					<p >{ res.name}</p>
				</div>
			))}
		</div>
	);
};

export default UserList;
