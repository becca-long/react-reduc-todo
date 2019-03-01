import React from 'react'

const TodoList = ({todosArray, removeTodo}) => {
  return (
    <ul>
    {todosArray.map((item, index) => 
            <li style={{textDecoration: item.done ? 'line-through' : 'none'}}
                       key={index}
                       onClick={() => removeTodo(index)}>
                  {item.task}</li>
        )
    }
    </ul> 
  )
}

export default TodoList
