import React, {useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import todosContext from "./context"
import todosReducer from "./reducer"
import todoContext from './context';
import TodoList from "./components/todoList"
import TodoForm from "./components/todoForm"

// export const userContext = React.createContext()
// const username = "Bruno"

const App = () => {
  const initialState = useContext(todosContext)
  const [state, dispatch] = useReducer(todosReducer, initialState)

  return (
    <todoContext.Provider value={{state, dispatch}}>
      <TodoForm/>
      <TodoList/>
    </todoContext.Provider>
  )
}

ReactDOM.render(
  // <userContext.Provider value={username}>
    <App />,
  // </userContext.Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
