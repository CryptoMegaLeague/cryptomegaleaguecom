import logo from './logo.svg';
import './App.css';

// Import HomePage components
import Nav from './components/home/Nav/Nav'
import Hero from './components/home/Hero/Hero';
import About from './components/home/About/About';
import Roadmap from './components/home/Roadmap/Roadmap';
import Footer from './components/home/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Hero />

      <Footer />
    </div>
  );
}

export default App;
