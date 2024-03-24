import { Link } from "react-router-dom";
import logo from '../components/images/Logo.svg'

function Footer() {
    return (
        <footer>
          <section>
            <div className="company-info">
              <img src={logo} alt="logo"/>
            </div>
            <div className="links">
              <h3>Links</h3>
              <ul id="doormat-navigation">
                <Link to="/">Home</Link>
                <Link to="#">About</Link>
                <Link to="#">Menu</Link>
                <Link to="/booking">Booking</Link>
                <Link to="#">Order Online</Link>
                <Link to="#">Login</Link>
              </ul>
            </div>
            <div className="contacts">
              <h3>Contact</h3>
              <ul id="contact">
                <li>Address: <br/>
                  Chicago
                </li>
                <li>Phone Number</li>
                <li><a href="mailto:little@lemon.com">Email: <br/> little@lemon.com</a></li>
              </ul>
            </div>
            <div className="socials">
              <h3>Social Media Links</h3>
              <ul id="social-media-links">
                <Link to="#">Facebook</Link>
                <Link to="#">Instagram</Link>
                <Link to="#">Twitter</Link>
              </ul>
            </div>
          </section>
        </footer>
    );
  }

  export default Footer;