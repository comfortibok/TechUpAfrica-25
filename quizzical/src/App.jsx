import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quizzical from "./components/Quizzical";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Quizzical />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
