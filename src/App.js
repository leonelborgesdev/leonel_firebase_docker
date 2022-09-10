import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Show } from "./components/Show/Show.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
