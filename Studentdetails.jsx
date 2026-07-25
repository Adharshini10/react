import React,{useState} from 'react';
function Studentdetails(){
const [student,setstudent]=useState([]);
const [name,setname]=useState("");
const [id,setid]=useState();
const [dept,setdept]=useState("");
const [year,setyear]=useState();

function Addstudent(){
const newstudent ={
    name, id, dept, year
}
setstudent(prev=>[...prev,newstudent]); // to see the list of student details
 // this is to after clicking the add student in enter it shows null it will reset to 'enter a name'
setname("");
setid("");
setdept("");
setyear("");
}
function Removestudent(index){
setstudent(s=>s.filter((_, i) => i !==index));  //filter is use to remove the student details while we click on that 
}
function Namehandle(event){
setname(event.target.value);
}
function Idhandle(event){
setid(event.target.value);
}
function Depthandle(event){
setdept(event.target.value);
}
function Yearhandle(event){
setyear(event.target.value);
}
return (
    <div className='student-div'>
        <h1>Student details</h1>
<ul>{
student.map((s,index) =>
<li  key={index} onClick={() => Removestudent(index)}>NAME={s.name} : ID={s.id} : Department={s.dept} : Year={s.year}</li> //this is how our output should have
)}
</ul>
<input className='student-input' type="text" value={name} onChange={Namehandle} placeholder='enter name'/><br/><br/>
<input className='student-input' type="number" value={id} onChange={Idhandle} placeholder='select id'/><br/><br/>
<input className='student-input' type="text" value={dept} onChange={Depthandle} placeholder='enter department'/><br/><br/>
<input className='student-input' type="number" value={year} onChange={Yearhandle} placeholder='select year'/><br/><br/>
    <button className='student-but' onClick={Addstudent}>Add student</button>
    </div>
);
}
export default Studentdetails;