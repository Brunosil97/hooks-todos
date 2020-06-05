export default function Reducer(state, action) {
    switch (action.type) {

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
            }

        default:
            return state
    }
}