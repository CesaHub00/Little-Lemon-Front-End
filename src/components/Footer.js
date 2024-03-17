import { Link } from "react-router-dom";
function Footer() {
    return (
      <>
        <img src="" alt="logo"/>
        <ul id="doormat-navigation">
          <li><Link to="/">Home</Link></li>
          <li><a href={'#about_section'}>About</a></li>
          <li><a href="#">Menu</a></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
        <ul id="contact">
          <li>Address</li>
          <li>Phone Number</li>
          <li>email</li>
        </ul>
        <ul id="social-media-links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </>
    );
  }
  
  export default Footer;