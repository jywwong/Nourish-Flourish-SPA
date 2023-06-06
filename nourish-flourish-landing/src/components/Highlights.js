import './css/Highlights.css';
import {IoIosArrowDown} from "react-icons/io";
import Juice from './assets/Green_goddess_juice.jpg';
import Bowl from './assets/eat-the-rainbow-bowl.jpg';
import Cookies from './assets/cookies.jpg';

function Highlights(){
return(
<div className="main-container">
<div className="Juice_container">
    <img src={Juice} alt="Green Goddess Juice" />
    <button className="btn"><IoIosArrowDown /></button>
</div>
<div className="Bowl_container">
<img src={Bowl} alt="Green Goddess Juice" />
<button className="btn"><IoIosArrowDown /></button>
</div>
<div className="Cookies_container">
<img src={Cookies} alt="Vegan Cookies" />
<button className="btn"><IoIosArrowDown /></button>
</div></div>
);
}

export default Highlights;