import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/edit-employee/:id" element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;