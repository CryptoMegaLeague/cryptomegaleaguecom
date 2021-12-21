import logo from './logo.svg';
import './App.css';

// Import HomePage components
import Nav from './components/home/Nav/Nav'
import Hero from './components/home/Hero/Hero';
import About from './components/home/About/About';
import Info from './components/home/Info/Info';
import Footer from './components/home/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1 className="pb-6 text-lg">Crypto Mega League</h1>
      <Hero></Hero>

      <Footer></Footer>
    </div>
  );
}

export default App;
