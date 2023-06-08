import './css/About.css';
import Maria from './assets/maria.jpg';

function About(){
return (
<div className="aboutcontainer">
<img src={Maria} alt="Maria"/>
<div className="abouttextcontainer">
<h2 className="abouttitle">Meet Maria</h2>
<p className="abouttext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
</div>
</div>
);
}

export default About