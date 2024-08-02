import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from "./Components/AddEmployee";
import EmployeeDetail from "./Components/EmployeeDetail";
import EditEmployee from "./Components/EditEmployee";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="addEmployee" element={<AddEmployee />} />
          <Route path="/" element={<EmployeeDetail />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
