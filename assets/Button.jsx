function Button(){
  const butt1= console.log("heyy");
  const butt2=(name)=> console.log(`${name} you clicked me`);
  let count=0;
  const butt3=()=>{
    if(count<3){
      count++;
      console.log(`You clicked me ${count} times!`);
    }
    else{
      console.log("stop clicking");
    }
  }
  return(
    <div>
          <button onClick={()=>butt2("minnu")}>BUTTON</button> <br /> <br/>
          <button onClick={()=>butt3("arshu")}>BUTTON2</button>
    </div>
  )
}
export default Button;
