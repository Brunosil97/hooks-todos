import React, {useContext, useReducer} from 'react';
import { userContext }from "./index"

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch (action.type) {
    
    case "increment":
      return {
        count: state.count + 1
      }
    case "decrement":
      return {
        count: state.count - 1
      }
      case "reset":
        return initialState

    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useContext(userContext)
  return (
    <div>
      Count: {state.count}<br/>
      <button onClick={() => dispatch({type: "increment"})}>Increment</button><br/>
      <button onClick={() => dispatch({type: "decrement"})}>Decrement</button><br/>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  );
}

export default App;
