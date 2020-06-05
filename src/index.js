import React, {useContext, useState, useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios"
import todosContext from "./context"
import todosReducer from "./reducer"
import todoContext from './context';
import TodoList from "./components/todoList"
import TodoForm from "./components/todoForm"
import Axios from 'axios';

// export const userContext = React.createContext()
// const username = "Bruno"

const useAPI = endpoint => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(endpoint)
    setData(response.data)
  }
  return data;
}

const App = () => {
  const initialState = useContext(todosContext)
  const [state, dispatch] = useReducer(todosReducer, initialState)

  const savedTodos = useAPI("https://hooks-api-phi.now.sh/todos")

  useEffect(() => {
    dispatch({
      type: "GET_TODOS",
      payload: savedTodos
    })
  }, [savedTodos])

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
