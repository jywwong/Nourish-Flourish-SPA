import React, {useRef} from 'react';
import './css/NavBar.css'
import AppRouter from '../AppRouter';

const NavBar = () => {
  const scrollRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({behavior:'smooth'});
    }
  };
return (
<nav className='navbar'>
<div className='container-logo'>
<h2 className='logo'>NOURISH/FLOURISH</h2>
</div>
<ul className='container-nav'>
  <li onClick={() => scrollToSection('about')}>About</li>
  <li onClick={() => scrollToSection('menu')}>Menu</li>
  <li onClick={() => scrollToSection('contact')}>Contact</li>
</ul>
<AppRouter/>
</nav>
);
}

export default NavBar