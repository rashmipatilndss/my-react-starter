import { useState } from "react";
function Counter({intialValue}){
    const[count,setCount]=useState(intialValue);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    return(
        <div>
            <h1>Count is {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter