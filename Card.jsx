import image from './assets/animie.png';
function Card(){
    return(
        <div className="card" style={{textAlign:"center"}}>
            <img src={image} alt="image" className="img"></img>
            <h1>This is a Card Component</h1>
        </div>
    )
}
export default Card;
