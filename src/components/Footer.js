import { Link } from "react-router-dom";

function Footer() {
    return (
      <>
        <footer>
          <img src="" alt="logo"/>
          <ul id="doormat-navigation">
            <Link to="/">Home</Link>
            <a href={'#about_section'}>About</a>
            <Link to="#">Menu</Link>
            <Link to="/booking">Booking</Link>
            <Link to="#">Order Online</Link>
            <Link to="#">Login</Link>
          </ul>
          <ul id="contact">
            <li>Address</li>
            <li>Phone Number</li>
            <li>email</li>
          </ul>
          <ul id="social-media-links">
            <Link to="#">Facebook</Link>
            <Link to="#">Instagram</Link>
            <Link to="#">Twitter</Link>
          </ul>
        </footer>
      </>
    );
  }

  export default Footer;