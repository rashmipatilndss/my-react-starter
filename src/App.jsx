import HelloWorld from "./components/Day1/HelloWorld"
import { useState } from "react";
import Counter from "./components/Day2/Counter";

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
