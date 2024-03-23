import { Link } from "react-router-dom"
function Hero() {
    return (
      <>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-desc">
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
              <p className="desc">We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.</p>
              <Link to="/booking" >
                <button className="reserve-btn btn">
                  Reserve a table
                </button>
              </Link>
            </div>
            <div className="img-wrapper">
              <img className="hero-img" src="" alt="hero image"/>
            </div>
          </div>
        </section>
      </>
    );
  }

  export default Hero;