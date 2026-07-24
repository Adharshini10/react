import React,{useState} from 'react';
import Usestate from './Usestate';
function Onchange(){
const [name,setname]=useState("");
const [email,setemail]=useState("");
const [dept,setdept]=useState(""); //select button
const [year,setyear]=useState(0); // radio button
const [query,setquery]=useState("");//text area


function Namehandler(event){
    setname(event.target.value);
}
function Emailhandler(event){
    setemail(event.target.value);
}
function Depthandler(event){
    setdept(event.target.value);
}
function Yearhandler(event){
    setyear(event.target.value);
}
function Queryhandler(event){
    setquery(event.target.value);
}
function handleSubmit(event) {
    event.preventDefault(); 
    alert(`Submitted!\nName: ${name}\nEmail: ${email}\nDept: ${dept}\nYear: ${year}\nQuery: ${query}`);
  }


return(
    

        <form onSubmit={handleSubmit}>
        <h2>STUDENT DETAILS</h2>
      
    <p>type your name :</p>
      <input type='text'  value={name} onChange={Namehandler}/> <br/>


<p> type your email :</p>
     <input type='email' value={email} onChange={Emailhandler}/> <br/>


<p>select your department :</p>
     <select onChange={Depthandler}>
         <option>cse</option>
         <option>ece</option>
         <option>eee</option>
         <option>it</option>
     </select>   <br/>


<p>select the year your studying :</p>
  1<input type='radio'  checked={year=="1"} value="1" onChange={Yearhandler}/>
  2<input type='radio'  checked={year=="2"} value="2" onChange={Yearhandler}/>
3<input type='radio' checked={year=="3"}  value="3" onChange={Yearhandler}/>
4<input type='radio'  checked={year=="4"} value="4" onChange={Yearhandler}/>
<br/>


<p>drop your queries :</p>
<textarea value={query} onChange={Queryhandler} placeholder='write here'></textarea>
    

<h2>Check Your Details</h2>
    <p>Name:{name}</p>
      <p>Email:{email}</p>
      <p>Dept:{dept}</p>
      <p>Year:{year}</p>
      <p>Query:{query}</p>


<button type='submit'>submit</button>

   </form>
);


}
export default Onchange;