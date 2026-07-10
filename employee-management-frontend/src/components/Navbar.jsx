import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          <i className="bi bi-people-fill me-2"></i>
          Employee Management
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-light ms-lg-3" to="/add-employee">
                <i className="bi bi-plus-circle me-2"></i>
                Add Employee
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;