import "./App.css";
import { Show } from "./components/Show";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
