import React, { useState } from "react";
import Form from "./Form";


function App() {
  const [state,setState]=useState(['',[],[],[]])
  const getValue=async(input)=>{
    try{
      const response=await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${input}&format=json&origin=*&limit=5`)
      if (response.ok){
        const jsonResponse=await response.json();
        setState(jsonResponse)
      }
      throw new Error ('Request failed');
    }catch(error){console.log(error)};
  }

  console.log(state)
  return (
    <div className="container">
     
      <Form getValue={getValue} result={state}/>
    </div>
  );
  }

export default App;
