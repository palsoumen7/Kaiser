import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/HomePage";
import Card from "./Components/Card";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Card />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
