import React from "react";
import Contact from "../Contacts";


function Home({name,age,data}){
    return(
        <div>
            <p>Home</p>
            <Contact data={data}/>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}

export default Home