import "./Button.scss";

const Button = ({ buttonText, onClick }) => {
  // const buttonText = buttonText;
  return <button onClick={onClick}>{buttonText}</button>;
};

export default Button;
