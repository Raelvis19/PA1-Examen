import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          Sistema React
        </Link>

        <div className="navbar-nav">

          <Link
            className="nav-link text-white"
            to="/"
          >
            Dashboard
          </Link>

          <Link
            className="nav-link text-white"
            to="/personas"
          >
            Personas
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;