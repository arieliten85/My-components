import "bootstrap/dist/css/bootstrap.min.css";

import "../src/styles/index.scss";
import { Routes, Route } from "react-router-dom";
import { NavBar01 } from "./components/navBar01/NavBar01";

function App() {
  return (
    <div className="app">
      <NavBar01 />
      <Routes>
        <Route path="/" element={<h1>Hola mundo</h1>} />
      </Routes>
    </div>
  );
}

export default App;
