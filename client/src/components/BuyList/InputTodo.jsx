import React from "react";

const InputTodo = (props) => {
    const { todoText, onChange, type} = props;
    return (
        <div>
            <input
                type={type}
                placeholder="買い物リスト"
                value={todoText}
                onChange={onChange}
            />
            
        </div>
    )
};

export default InputTodo