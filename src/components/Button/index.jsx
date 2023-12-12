import "./button.css";

const Button = (props) => {
  console.log(props);
  // const toGetValue = () => {
  //   props.onClick(props.indexNumber);
  // };
  return (
    <button className="btn" onClick={() => props.onClick(props.indexNumber)}>
      {props.text}
    </button>
  );
};

export default Button;
