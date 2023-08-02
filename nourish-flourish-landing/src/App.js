import './App.css';
import NavBar from './components/NavBar';
import HeroContainer from './components/HeroContainer';
import About from './components/About';
import Highlights from './components/Highlights';
import Menu from './components/Menu';
import Lettucemeet from './components/Lettucemeet';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HeroContainer />
        <section id="about">
          <About />
        </section>
        <Highlights />
        <section id="menu">
          <Menu />
        </section>
        <Lettucemeet />
        <section id="contact">
          <Contact />
        </section>
      </header>
    </div>
  );
}

export default App;
