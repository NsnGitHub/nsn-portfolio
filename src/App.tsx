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
        <p className="introText">
          I'm a Computing Science student at Simon Fraser University who specializes in turning caffiene into software
        </p>
      </div>
    </>
  );
}

export default App
