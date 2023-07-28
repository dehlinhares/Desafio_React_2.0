import "./card.css";
import { Link } from "react-router-dom";

function Card( props ) {
  return (
    <div className="card-content">
      <p>{props.name}</p>
      <p>{props.house}</p>
      <img alt="" src={props.image}></img>
    </div>
  );
}

export default Card;