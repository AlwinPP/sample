import "./input.css";

const Input = (props) => {
  return (
    <input
      className="inp"
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
};

export default Input;
