import { Link } from "react-router-dom";
function Nav() {
    return (
      <>
        <img src="" alt="logo"/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href={'#about_section'}>About</a></li>
          <li><a href="#">Menu</a></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </>
    );
  }
  
  export default Nav;