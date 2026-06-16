import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Visitantes from "./pages/Visitantes";
import RegistrarVisitante from "./pages/RegistrarVisitante";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

        <div className="container-fluid p-4">
          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/visitantes"
              element={<Visitantes />}
            />

            <Route
              path="/registrar-visitante"
              element={<RegistrarVisitante />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;