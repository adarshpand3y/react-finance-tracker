import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AddExpense from "./Pages/AddExpense";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<AddExpense />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
