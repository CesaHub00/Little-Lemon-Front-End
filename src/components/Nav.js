import { Link } from "react-router-dom";
import logo from '../components/images/Logo.svg'

function Nav() {
    return (
        <nav>
          <img src={logo} alt="logo"/>
          <ul>
            <Link to="/">Home</Link>
            <Link to="#">About</Link>
            <Link to="#">Menu</Link>
            <Link to="/booking">Booking</Link>
            <Link to="#">Order Online</Link>
            <Link to="#">Login</Link>
          </ul>
        </nav>
    );
  }

  export default Nav;