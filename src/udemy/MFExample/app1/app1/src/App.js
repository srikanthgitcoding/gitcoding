import logo from "./logo.svg";
import "./App.css";
import moment from "moment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        I am from app1 - {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </header>
    </div>
  );
}

export default App;
