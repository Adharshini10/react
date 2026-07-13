function Button(){
    const button = () => console.log("you clicked me!!");
    const button1 = (name) => console.log(`${name} clicked me!!`);
    return(
        <button onClick ={()=> button1("broo")}>click here</button>
    )
}
export default Button;