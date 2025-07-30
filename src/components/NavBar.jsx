import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#333" }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/info">
                Info
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/rules">
                Rules
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/brackets">
                Brackets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/results">
                Results
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
