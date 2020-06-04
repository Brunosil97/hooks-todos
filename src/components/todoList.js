import React, {useContext} from 'react';
import TodosContext from "../context"

export default function Todolist() {
    const {state, dispatch } = useContext(TodosContext)
    
    return (
        <div>
            <ul>
                {state.todos.map(todo => {
                    return <li key={todo.id}>
                        <span>{todo.text}</span>
                    </li>
                })}
            </ul>
        </div>
    )
}