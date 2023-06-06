import './App.css';
import NavBar from './components/NavBar';
import HeroContainer from './components/HeroContainer';
import About from './components/About';
import Highlights from './components/Highlights';
import Menu from './components/Menu';
import Lettucemeet from './components/Lettucemeet';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <HeroContainer/>
        <About/>
        <Highlights/>
        <Menu/>
        <Lettucemeet/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
