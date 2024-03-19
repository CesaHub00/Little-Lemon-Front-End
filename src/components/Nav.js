import { Link } from "react-router-dom";

function Nav() {
    return (
      <>
        <nav>
          <img src="" alt="logo"/>
          <ul>
            <Link to="/">Home</Link>
            <a href={'#about_section'}>About</a>
            <Link to="#">Menu</Link>
            <Link to="/booking">Booking</Link>
            <Link to="#">Order Online</Link>
            <Link to="#">Login</Link>
          </ul>
        </nav>
      </>
    );
  }

  export default Nav;