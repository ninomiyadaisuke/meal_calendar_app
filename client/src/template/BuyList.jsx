import React, { useState } from 'react'
import { InputTodo } from '../components/BuyList/InputTodo'
import { ListTodo } from '../components/BuyList/ListTodo'
// import {getMeals} from '../functions/buyList'


const BuyList = () => {
    const [todoText, setTodoText] = useState('');
    const [buyListTodos, setbuyListTodos] = useState([]);
    // const [shoppings, setShoppings] = useState([])
    // const [value, setValue] = useState(1);


//     const onClickMeal = () => { 
//         getMeals().then((res) => {
//             console.log(res);
//             setShoppings(res)
//     })
// }
    const onChangeTodoText = (event) => setTodoText(event.target.value);

    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...buyListTodos, todoText];
        setbuyListTodos(newTodos);
        setTodoText("");
        // console.log(todoText);
    };

    const onClickDelete = (index) => {
        const newTodos = [...buyListTodos];
        newTodos.splice(index, 1)
        setbuyListTodos(newTodos);
        // console.log(index,buyListTodos);
    };

    // const onClickMinus = () => {
    //     alert()
       
    // }
    
    
        return (
            <>
                <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
                <ListTodo todos={buyListTodos} onClickDelete={onClickDelete} />
                {/* <button onClick={onClickMeal}>GetMeal</button>
                {shoppings && shoppings.map((shopping) => (
                    <p key={shopping._id}>{ `${shopping.item}: ${shopping.count}`}</p>
                ))} */}
                        
                    
                

            </>
        )
}

export default BuyList
