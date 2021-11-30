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

      <Hero></Hero>

      <About></About>

      <Info></Info>

      <Footer></Footer>
    </div>
  );
}

export default App;
