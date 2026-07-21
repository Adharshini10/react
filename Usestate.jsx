import React, { useState } from "react";
function Usestate(){
    const [name,setName]=useState("guest"); //here the guest is the initial value if we do not give name like heart it will print guest
    const [year,setYear]=useState(0);
    const [isStudent,setIsstudent]=useState(true);
    const updatename=()=>{
        setName("❤️")  
    }
    const studied =()=>{
        setYear(year + 1) // it increment the count of numbers by clicking buttons
    }
    const isstudent= () => {
        setIsstudent(!isStudent);// check student it initially true later it chnages yes to no 
    }
    return(
        <div>
            <p>Name:{name}</p> 
            <button onClick={updatename}>set name</button>

            <p>Year:{year}</p> 
            <button onClick={studied}>year studied</button>

            <p>Is student:{isStudent ? "Yes" : "No"}</p> 
            <button onClick={isstudent}>check student</button>
            
        </div>
    )
}
export default Usestate;