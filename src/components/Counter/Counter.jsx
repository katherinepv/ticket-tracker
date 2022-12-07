import "./Counter.scss";
import { useState } from "react";
import Button from "../Button/Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <p className="counter__text">Counter</p>
      <p className="counter__number">{counter}</p>
      <Button onClick={handleDecrement} buttonText={"-"} />
      <Button onClick={handleIncrement} buttonText={"+"} />
    </div>
  );
};

export default Counter;
