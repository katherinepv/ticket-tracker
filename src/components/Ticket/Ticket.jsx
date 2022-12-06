import "./Ticket.scss";
import Counter from "../Counter/Counter";

const Ticket = ({ name, role }) => {
  return (
    <div className="ticket">
      <p className="ticket__name">{name}</p>
      <p className="ticket__role">{role}</p>
      <Counter />
    </div>
  );
};

export default Ticket;
