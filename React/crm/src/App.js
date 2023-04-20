import "./App.css";
import AddClientForm from "./components/AddClientForm";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [client, setClient] = useState(true);
  const routeToClient = () => {
    setClient(true);
  };
  const routeToDashboard = () => {
    setClient(false);
  };

  return (
    <div className="App">
      <button className="btn btn-secondary m-5" onClick={routeToClient}>
        Add Client
      </button>
      <button className="btn btn-secondary m-5" onClick={routeToDashboard}>
        Dashboard
      </button>
      {client ? <AddClientForm /> : <Dashboard />}
    </div>
  );
}

export default App;
