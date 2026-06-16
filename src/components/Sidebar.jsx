import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h5>Menú</h5>

      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">
             Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/visitantes">
             Visitantes
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="/registrar-visitante"
          >
            Registrar Visitante
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;