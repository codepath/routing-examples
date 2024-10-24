import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1>Where do you want to go? </h1>
        <nav>
          <Link
            to="/"
            style={{ fontWeight: "bold", fontSize: "x-large", color: "coral" }}
          >
            {" "}
            Home{" "}
          </Link>
          <span className="tab"></span>
          <Link
            to="/about"
            style={{ fontWeight: "bold", fontSize: "x-large", color: "coral" }}
          >
            {" "}
            About{" "}
          </Link>
          <span className="tab"></span>
          <Link
            to="/contact"
            style={{ fontWeight: "bold", fontSize: "x-large", color: "coral" }}
          >
            {" "}
            Contact{" "}
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;