function Eventhandler(){
const Butt=(e)=> e.target.textContent="ouch";
const image='./src/assests/animie.png';
const imagedissapear=(e)=> e.target.style.display="none";
const imageconsole=console.log("you clicked the image");

return(
<div>
        <button onClick={(e)=>Butt(e)}> single Click me</button>
        <br/>
        <br/>
        <button onDoubleClick={(e)=>Butt(e)}> double click</button>
                <br/>
        <br/>
        <img src={image} onClick={(e)=>imagedissapear(e)} src={image}></img>

</div>
)
}
export default Eventhandler;