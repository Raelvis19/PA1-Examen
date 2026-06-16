import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Personas from "./pages/Personas";
import NuevaPersona from "./pages/NuevaPersona";

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
              path="/personas"
              element={<Personas />}
            />

            <Route
              path="/nueva-persona"
              element={<NuevaPersona />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;