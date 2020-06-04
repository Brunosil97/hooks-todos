import React, {useContext} from 'react';
import { userContext }from "./index"


function App() {

  const value = useContext(userContext)
  return (
    // <div>
    //   <userContext.Consumer>
    //     {value => <div>Hello {value}</div>}
    //   </userContext.Consumer>
    // </div>
    <div>
      Hello {value}
    </div>
  );
}

export default App;
