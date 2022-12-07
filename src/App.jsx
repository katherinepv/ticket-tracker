import "./App.scss";
import Ticket from "./components/Ticket/Ticket";
import team from "../src/data/team";
import SearchBar from "./components/SearchBar/SearchBar";
import DropdownBox from "./components/DropdownBox/DropdownBox";

// use arrays to not have to manually enetr all tickets
// create an array of tickets

const App = () => {
  const ticketJSX = team.map(({ id, name, role }) => (
    <Ticket key={id} name={name} role={role} />
  ));

  return (
    <div className="App">
      <h1>Ticket Tracker</h1>
      <div className="search">
        <SearchBar />
        <DropdownBox />
      </div>

      <main className="ticket-container">{ticketJSX}</main>
    </div>
  );
};

export default App;
