import React,{useState} from 'react';
function Todo(){
const [tasks,settasks] =useState([]);
const [newtasks,setnewtasks] = useState("");


function Inputhandle(event){
setnewtasks(event.target.value);
}


function Addtask(){
if(newtasks.trim()!== ""){
    settasks(tasks=>[...tasks,newtasks]);
    setnewtasks("");
}
}


function Deletetask(index){
const updatetasks=tasks.filter((_,i) => i !== index);
settasks(updatetasks);
}


function Moveup(index){
if(index>0){
    const updatetasks=[...tasks,];
    [updatetasks[index],updatetasks[index-1]]=[updatetasks[index-1],updatetasks[index]];
settasks(updatetasks);
}
}

function Movedown(index){
if(index<tasks.length-1){
    const updatetasks=[...tasks,];
    [updatetasks[index],updatetasks[index+1]]=[updatetasks[index+1],updatetasks[index]];
settasks(updatetasks);
}
}

return(
<div className='todo-div'>
    <h1 className='todo-h1'>To-do-list</h1>
    <input className='todo-input' type='text' value={newtasks} onChange={Inputhandle} placeholder='Enter a task'/>
    <button className='todo-add' onClick={Addtask}>Add task</button>
   
   <div className='todo-div2'><ul className='todo-task'>
        {
            tasks.map((task,index)=>
            <li key={index}>
<span className='todo-span'>{task}</span>
<button className='todo-delete' onClick={() => Deletetask(index)}>Delete</button>
<button className='todo-up' onClick={() => Moveup(index)}>Up</button>
<button className='todo-down' onClick={() => Movedown(index)}>Down</button>
            </li>)
        }
        
    </ul></div> 
</div>
);
}
export default Todo;