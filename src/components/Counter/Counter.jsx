import "./Counter.scss";
import Button from "../Button/Button";

const Counter = (props) => {
  return (
    <div className="counter">
      <p className="counter__text">Counter</p>
      <p className="counter__number">0</p>
      <Button buttonText={"-"} />
      <Button buttonText={"+"} />
    </div>
  );
};

export default Counter;
