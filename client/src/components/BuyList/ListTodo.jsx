import React from 'react'

const ListTodo = (props) => {
    const {buyList} =props
    return (
        <div>
            {buyList.map((item) => (
                <div key={item._id}>
                    <p>{item.item}</p>
                    <p>{ item.count}</p>
</div>
            ))}
      </div> 
    );
};

export default ListTodo


