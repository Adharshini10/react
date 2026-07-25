import React,{useState} from "react";
function Counter(){
const [counter,setCounter] =useState(0);
const increment=()=>{

    //  if we want to increment it by 3 like 3,6,9 we should use update function like
    //  setCounter( counter=counter + 1)
   // setCounter( counter=counter + 1) (or else we can use 'c' 1st letter of counter)
   // setCounter( c=c + 1)
   // using three times it will increment 3 directly

    setCounter(counter + 1)
}
const decrement=()=>{

    // also in decrement if we want to reduce it for 2 times like 4,2,0.. use
    //  setCounter(counter=counter -1) //or else use 'c'
// setCounter( c= c -1)
//after this ,the state is updating if we use "setCounter(counter -1)" as three times it wont works we should call the object
// this is called updater function
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
