import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quizzical from "./components/Quizzical";
import "./index.css";

function App() {
  return (
    <div className="appContainer">
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Quizzical />} />
      </Routes>
    </BrowserRouter>
</div>  );
}

export default App;
