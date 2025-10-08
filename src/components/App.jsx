import HelloWorld from "../HelloWorld"
import { useState } from "react";

function App() {
  const [message,setMessage]=useState("");
    const handleClick=()=>{
      setMessage("project running");
    };
  return (
    <>
    <HelloWorld/>
    <button onClick={handleClick}>Run Project</button>
    <p>{message}</p>
    </>
  )
}
export default App
