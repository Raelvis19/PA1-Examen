import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-light border-end p-3"
      style={{
        width: "220px",
        minHeight: "100vh",
      }}
    >
      <h5>Menú</h5>

      <ul className="nav flex-column">

        <li className="nav-item">
          <Link
            className="nav-link"
            to="/"
          >
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="/personas"
          >
            Personas
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="/nueva-persona"
          >
            Nueva Persona
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;