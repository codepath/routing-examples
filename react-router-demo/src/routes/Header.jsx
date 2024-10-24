import { Outlet, Link } from "react-router-dom";

// TODO: we need to make a small nav bar in our header by adding some links, how can we do that? and how can we make sure all of our further routes have the nav bar in them?
const Header = () => {
  return (
    <div >
      <div className="header">
        <h1>Where do you want to go? </h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
      </div>

    </div>
  );
};

export default Header;