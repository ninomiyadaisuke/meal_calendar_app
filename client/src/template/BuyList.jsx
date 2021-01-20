import React, { useState, useEffect } from "react";
import { getTestMessage } from "../functions/buyList";
import { ListTodo, InputTodo } from '../components/BuyList'
import { createBuyList,  getAllBuylist} from '../functions/buyList'


const BuyList = () => {
  const [item, setItem] = useState("")
  const [count, setCount] = useState(1);
const [getBuylist, setGetBuylist] = useState([])

    useEffect(() => {
      loadBuylist()
    }, [])
  
  const loadBuylist = () => {
    getAllBuylist().then((res) => {
        //console.log(res.data);
      setGetBuylist(res.data)
      })
  }

  
  //const onChangeTodoText = (event) => setTodoText(event.target.value);

    const onClickItems = () => {
      //console.log(item, count);
      createBuyList(item, count)
        .then((res) => {
          alert(`${res.data.item}を追加しました。`)
          setItem("")
          setCount(1)
　　　　　　loadBuylist()
      })

    };

    // const onClickDelete = (index) => {
    //     const newTodos = [...buyListTodos];
    //     newTodos.splice(index, 1)
    //     setbuyListTodos(newTodos);
    // };
  
  const onChangecount = (e) => {
    setCount(e.target.value)
    //console.log(count);
  }

  const onChangeItem = (e) => {
    setItem(e.target.value)
    //console.log(item);
  }
  
    
	return (
    <div>
      
      <InputTodo type={"text"} todoText={item} onChange={onChangeItem} />
      <InputTodo type={"number"} todoText={count} onChange={onChangecount}/>
      <button onClick={onClickItems}>追加</button>
			
      <ListTodo buyList={getBuylist} />
      {/* <p>買い物リストページです</p>
			<button onClick={getMessage}>Message</button>
			<button onClick={resetMessage}>reset</button>
			<p>{message}</p> */}
		</div>
	);
};




    
export default BuyList;
