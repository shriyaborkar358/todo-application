import React from 'react'
import "./ToDoCard.css"

function ToDoCard({todoItem, i}) {

    return (
       <div className='todo-items'>
        {todoItem}
       </div>
    )
}

export default ToDoCard