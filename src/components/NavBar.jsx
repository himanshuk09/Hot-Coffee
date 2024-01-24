import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="header" data-aos="fade-down">
      <div id="menu-btn" className="fas fa-bars"></div>
      <Link to="/" className="logo">
      {" "}
      Hot Coffee<i className="fas fa-mug-hot"></i>{" "}
      </Link>

      {/**<nav className="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#review">review</a>
        <a href="#book">book</a>
      </nav> */}

      
      <Link to="/menu" className="btn">Order Now</Link>
    </header>
  );
};

export default NavBar;
