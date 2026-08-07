import React,{useState} from "react";
function Calculator(){
    const[input,setinput]=useState("");
    const[result,setresult]=useState("");

    const Handleclick = (value)=>{
        setinput(input+value);
    }
    const clear = ()=>{
        setinput("");
        setresult("");
    }
    const handleDelete=()=>{
        setinput(input.slice(0,-1));
    }
    const calculator=()=>{
        try{
        const tokens=input.split(/([+\-*/])/)
        let current=parseFloat(tokens[0]);
        for(let i=1;i<tokens.length;i+=2){
            const operator=tokens[i];
            const nextsum=parseFloat(tokens[i+1]);

            switch(operator){
                case "+":
                    current += nextsum;
                    break;
                case "-":
                    current -= nextsum;
                    break;
                case "*":
                    current *= nextsum;
                    break;
                case "/":
                    current /= nextsum;
                    break;
                  default:
                    throw new Error("invalid operator");
            }
        }
            setresult(current)
        } 
        catch {
            setresult("invalid");
        }
    };
    return(
        <div className="cal-div">
           <h2>simple calculator</h2>
           <input className="cal-input"type='text' value={input} readOnly /><button onClick={handleDelete}>⌫</button>
           <h1 className="cal-h1">result:{result}</h1>
           

           <div className="cal-div-main">
           <div className="cal-div1-main">
            <button onClick={()=>Handleclick("1")}>1</button>
            <button onClick={()=>Handleclick("2")}>2</button>
            <button onClick={()=>Handleclick("3")}>3</button>
            <button  className="cal-operator" onClick={()=>Handleclick("+")}>+</button>
           </div>

           <div className="cal-div2-main">
            <button onClick={()=>Handleclick("4")}>4</button>
            <button onClick={()=>Handleclick("5")}>5</button>
            <button onClick={()=>Handleclick("6")}>6</button>
            <button className="cal-operator" onClick={()=>Handleclick("-")}>-</button>
           </div>

            <div className="cal-div3-main">
            <button onClick={()=>Handleclick("7")}>7</button>
            <button onClick={()=>Handleclick("8")}>8</button>
            <button onClick={()=>Handleclick("9")}>9</button>
            <button className="cal-operator"  onClick={()=>Handleclick("*")}>*</button>
           </div>
           
           

           <div className="cal-div4-main">
            <button onClick={()=>Handleclick("0")}>0</button>
            <button className="cal-operator"  onClick={()=>Handleclick("/")}>/</button>
         <button className="cal-clear" onClick={clear}>c</button>
         <button className="cal-equal" onClick={calculator}>=</button>
           </div>
           </div>
        </div>
    )
}
export default Calculator;