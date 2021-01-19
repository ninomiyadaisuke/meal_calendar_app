import React from "react";

export const InputTodo = (props) => {
    const { todoText, onChange, onClick} = props;
    return (
        <div>
            <input
                placeholder="買い物リスト"
                value={todoText}
                onChange={onChange}
            />
            <button onClick={onClick}>追加</button>
        </div>
    )
};