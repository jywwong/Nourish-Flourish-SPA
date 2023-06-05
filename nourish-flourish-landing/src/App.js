import './App.css';
import NavBar from './components/NavBar';
import HeroContainer from './components/HeroContainer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <HeroContainer/>
        <About/>
      </header>
    </div>
  );
}

export default App;
