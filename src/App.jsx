import HelloWorld from "./HelloWorld"
import { useState } from "react";
import Counter from "./counter/Counter";

function App() {
  const [message,setMessage]=useState("");
    const handleClick=()=>{
      setMessage("project running");
    };
  return (
    <>
    <HelloWorld/>
    <Counter intialValue={0}/>
    <button onClick={handleClick}>Run Project</button>
    <p>{message}</p>
    </>
  )
}
export default App
