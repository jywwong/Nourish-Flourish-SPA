import './css/NavBar.css'
import AppRouter from '../AppRouter';
import {Link, animateScroll as scroll} from "react-scroll";

function NavBar() {
return (
<nav className='navbar'>
<div className='container-logo'>
<h2 className='logo'>NOURISH/FLOURISH</h2>
</div>
<ul className='container-nav'>
  <li><a href="/about">About</a></li>
  <li><a href="/menu">Menu</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>
<AppRouter/>
</nav>
);
}

export default NavBar