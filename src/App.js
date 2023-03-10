import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
