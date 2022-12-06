import "./App.scss";
import Ticket from "./components/Ticket/Ticket";
import team from "../src/data/team";

// use arrays to not have to manually enetr all tickets
// create an array of tickets

const App = () => {
  const ticketJSX = team.map(({ id, name, role }) => (
    <Ticket key={id} name={name} role={role} />
  ));

  return (
    <div className="App">
      <h1>Ticket Tracker</h1>
      <main className="ticket-container">{ticketJSX}</main>
    </div>
  );
};

export default App;
