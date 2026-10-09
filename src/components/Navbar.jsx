import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <span className="logo-icon">R</span>
          <span>React Campus</span>
        </Link>

        <div className="nav-links">

          <Link
            to="/"
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>

          <Link
            to="/students"
            className={
              location.pathname.startsWith("/students")
                ? "nav-link active"
                : "nav-link"
            }
          >
            Students
          </Link>

          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
