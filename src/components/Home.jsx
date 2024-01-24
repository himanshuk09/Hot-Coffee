const Home = () => {
  return (
    <section className="home" id="home">
      <div className="row" >
        <div className="content" data-aos="fade-right">
          <h3>fresh coffee in the morning</h3>
          <a href="#menu" className="btn">
            Order Now
          </a>
        </div>

        <div className="image" data-aos="zoom-in" >
          <img
            srcSet={require("../image/home-img-1.png")}
            className="main-home-image"
            alt=""
          />
        </div>
      </div>

      <div className="image-slider" data-aos="fade-up" >
        <img srcSet={require("../image/home-img-1.png")} alt="" />
        <img srcSet={require("../image/home-img-2.png")} alt="" />
        <img srcSet={require("../image/home-img-3.png")} alt="" />
      </div>
    </section>
  );
};

export default Home;
