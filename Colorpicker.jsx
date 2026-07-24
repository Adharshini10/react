import React,{useState, Usestate} from 'react';
function Colorpicker(){
const [color,setcolor]=useState("#000000");
function Colorhandler(event){
    setcolor(event.target.value);
}
return(
    <div className='color-div'>
        <h1 className='color-h1'>color picker</h1>
        <div className='color-div2' style={{width: "300px",
          height: "200px",
          margin: "20px auto",
          border: "2px solid black",
          borderRadius: "10px",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "0.3s ease",}}>
         <p className='color-para1'>selected color:{color} </p>
        </div>
        <p className='color-para2'>select a color</p>
        <input type='color' onChange={Colorhandler}/>
    </div>
);
}
export default Colorpicker;