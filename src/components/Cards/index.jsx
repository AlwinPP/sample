import "./card.css";
import Button from "../Button";

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.title}</p>
      <Button text="REMOVE" indexNumber={props.index} onClick={props.remove} />
    </div>
  );
};

export default Card;
