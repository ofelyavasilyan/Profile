import React from "react";
import "./index.css";
import Home from "./pages/Home";
  




function App(){ 
    let name="Poxos";
    let age=25;
    let data=[1,2,3,4,5];
    return(
       <div> 
       <Home name={name} age={age} data={data} />
       <Home name={name} age={age} data={data} />
        </div>
    )
}
export default App