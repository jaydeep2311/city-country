import "./App.css";
import Addcountries from "./Components/Addcountries";
import AddCity from "./Components/AddCity";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={<Addcountries />} />
        <Route path="/add-city" element={<AddCity />} />
      </Routes>
    </div>
  );
}

export default App;
