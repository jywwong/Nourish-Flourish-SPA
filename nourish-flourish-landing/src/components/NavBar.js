import './css/NavBar.css'

function NavBar() {
return (
<nav className='navbar'>
<div className='container-logo'>
<h2>Nourish/Flourish</h2>
</div>
<ul className='container-nav'>
  <li><a href="default.asp">About</a></li>
  <li><a href="news.asp">Menu</a></li>
  <li><a href="contact.asp">Contact</a></li>
</ul>
</nav>
);
}

export default NavBar