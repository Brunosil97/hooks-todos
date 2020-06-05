// import uuidv4 from "uuidv4"
const { uuid } = require('uuidv4');

export default function Reducer(state, action) {
    switch (action.type) {
    
        case "ADD_TODO":
            console.log(action.payload)
            const newTodo = {
                id: uuid(),
                text: action.payload,
                complete: false
            };
            const added_todo = [...state.todos, newTodo];
            return {
                ...state,
                todos: added_todo
            }
        
        case "TOGGLE_TODO":
           const toggle_todos = state.todos.map(t => {
               return t.id === action.payload.id ? 
                {...action.payload, complete: !action.payload.complete}
                 : t }
            )
            return {
                ...state,
                todos: toggle_todos
            }

        case "DELETE_TODO":
            const filter = state.todos.filter(t => t.id !== action.payload.id)
            return {
                ...state,
                todos: filter
            };

        default:
            return state
    }
}