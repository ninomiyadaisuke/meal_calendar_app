import React from 'react'

export const ListTodo = (props) => {
    const {todos,onClickDelete} =props
    return (
        <div>
                <p>買い物リスト</p>
                <ul>
                    {todos.map((todo, index) => {
                        return (
                            <div key={todo} >
                                <li>{todo}</li>
                                <button onClick={() => onClickDelete(index)}>削除</button>
                                
                                
                            </div>
                        );
                    })}
                    
                </ul>
            </div>
    );
};


