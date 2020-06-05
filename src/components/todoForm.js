import React, { useState, useEffect, useContext } from 'react';
import TodoContext from "../context"
import axios from "axios"
const { uuid } = require('uuidv4');

export default function TodoForm() {
    const [todo, setTodo] = useState("")
    const {state: {currentTodo = {}}, dispatch} = useContext(TodoContext)

    useEffect(() => {
        if (currentTodo.text) {
            setTodo(currentTodo.text)
        } else {
            setTodo("")
        }
    }, [currentTodo.id])

    const handleSubmit = async(event) => {
        event.preventDefault();
        if (currentTodo.text) {
            const response =
            await axios.patch(`https://hooks-api-phi.now.sh/todos/${currentTodo.id}`, {
                text: todo
            })
            dispatch({type: "UPDATE_TODO", payload: response.data})
        } else {
            const response = 
            await axios.post(`https://hooks-api-phi.now.sh/todos`, {
                id: uuid(),
                text: todo,
                complete: false
            })
            dispatch({type: "ADD_TODO", payload: response.data}); 

        }
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-5">
            <input className="border-black border-solid border-2" 
            type="text" 
            onChange={event => setTodo(event.target.value)}
            value={todo}
            />
        </form>
    )
}