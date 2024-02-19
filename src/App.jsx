import React from "react";
import RouterComponents from "./Components/RouterComponents";
import { BrowserRouter as Router } from 'react-router-dom';
function App(){
  return(
    <div>
    <Router>
      <RouterComponents/>
      </Router>
    </div>
  )
}

export default App