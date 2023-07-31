import "./card.css";
import { Link } from "react-router-dom";

function Card( props ) {
  return (
    <div className="card">
    <div className="card-content-img">
    <p>{props.name}</p>
    <p>{props.house}</p>
    <img className="CardImage" alt="" src={props.image}></img>
    </div></div>
    
  
      
      
  );
}

export default Card;