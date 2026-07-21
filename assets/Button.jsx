function Button(){
  const butt1 = console.log("heyy");  //this automatically prints in inspect bcoz butt1 is not a function like butt2
  const butt2=(name2)=> console.log(`${name} you clicked me`);  //it prints no of times as the button clicked
  let count=0;
  const butt3=()=>{
    if(count<3){
      count++;
      console.log(`You clicked me ${count} times!`);         //it counts
    }
    else{
      console.log(`${name} stop clicking`);         //it prints when the count is upto limit
    }
  }
  return(
    <div>
      <button onClick={()=>butt1("arshu")}>button</button><br /> <br/>
          <button onClick={()=>butt2("minnu")}>BUTTON 1</button> <br /> <br/>
          <button onClick={()=>butt3("arshu")}>COUNT BUTTON</button>
    </div>
  )
}
export default Button;
