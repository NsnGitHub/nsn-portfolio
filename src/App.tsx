import './App.css';
import LiquidBackground from './components/liquidBackground';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <LiquidBackground></LiquidBackground>
      <div className="center">
        <h1>
          Hi, I'm Anson
        </h1>
        <p>
          I turn caffiene into software
        </p>
      </div>
    </>
  );
}

export default App
