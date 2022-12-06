import "./Button.scss";

const Button = (props) => {
  const buttonText = props.buttonText;
  return <button>{buttonText}</button>;
};

export default Button;
