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
          YAG
        </h1>
      </div>
    </>
  );
}

export default App
