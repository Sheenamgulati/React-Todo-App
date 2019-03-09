import React from 'react';
const Todo = ({todos, deleteTodo}) => {
    //we are binding function here 
    const todolist = todos.length ? todos.map(todo => {
        return (
            <div className='collection-item'>
                <span onClick={() => {deleteTodo(todo.id)}}>{todo.item}</span>
            </div>
        )
    }
    ) : (
        <p className='center'> Yay! I don't have anything to do !</p>
    )
    return (
        <div className="todos collection">
            {todolist}
        </div>
    )
   
}
export default Todo;
