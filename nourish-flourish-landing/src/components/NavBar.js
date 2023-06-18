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
<p className='logo'>NOURISH/FLOURISH</p>
</div>
<ul className='container-nav'>
  <li onClick={() => scrollToSection('about')}>ABOUT</li>
  <li onClick={() => scrollToSection('menu')}>MENU</li>
  <li onClick={() => scrollToSection('contact')}>CONTACT</li>
</ul>
<AppRouter/>
</nav>
);
}

export default NavBar