function Usergreeting(props){
return(props.isloggedin) ? <h4 className="greetwelcome">welcome {props.name}</h4> : <h4 className="greetno">loggin properly</h4>
}
export default Usergreeting;