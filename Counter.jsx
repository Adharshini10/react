import React,{useState} from "react";
function Counter(){
const [counter,setCounter] =useState(0);
const increment=()=>{
    setCounter(counter + 1)
}
const decrement=()=>{
    setCounter(counter -1)
}
const reset=()=>{
    setCounter(0)
}
return(
<div className="counterclass">
    <p className="counter">{counter}</p>
    <button  className="increment" onClick={increment}>Increment</button>
    <button className="decrement" onClick={decrement}>decrement</button>
    <button className="reset" onClick={reset}>reset</button>
    
</div>
);
}
export default Counter;
