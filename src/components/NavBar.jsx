import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="header" data-aos="fade-down">
      <div id="menu-btn" className="fas fa-bars"></div>
      <Link to="/" className="logo">
      {" "}
      Hot Coffee<i className="fas fa-mug-hot"></i>{" "}
      </Link>  
      <Link to="/menu" className="btn">Order Now</Link>
    </header>
  );
};

export default NavBar;
