// import uuidv4 from "uuidv4"
const { uuid } = require('uuidv4');

export default function Reducer(state, action) {
    switch (action.type) {

        case "GET_TODOS":
            return {
                ...state,
                todos: action.payload
            }
    
        case "ADD_TODO":
            if(!action.payload) {
                return state 
            }
            if (state.todos.findIndex(t => t.text === action.payload) > -1) {
                return state 
            }
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

        case "SET_CURRENT_TODO":
            return {
                ...state,
                currentTodo: action.payload
            }

        case "UPDATE_TODO":
            if(!action.payload) {
                return state
            }
            if (state.todos.findIndex(t => t.text === action.payload) > -1) {
                return state 
            }
            const updatedTodo = {...state.currentTodo, text: action.payload}
            const updatedIndex = state.todos.findIndex(t => t.id === state.currentTodo.id)
            const updatedTodos = [
                ...state.todos.slice(0, updatedIndex),
                updatedTodo,
                ...state.todos.slice(updatedIndex + 1)
            ]

            return {
                ...state,
                currentTodo: {},
                todos: updatedTodos
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
            const isRemovedTodo = state.currentTodo.id === action.payload.id ? {} : state.currentTodo
            return {
                ...state,
                currentTodo: isRemovedTodo,
                todos: filter
            };

        default:
            return state
    }
}