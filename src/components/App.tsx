import "../styles/App.css";

import LiquidBackgroundV2 from "./LiquidBackground-v2";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <LiquidBackgroundV2 />
      <div className="center">
        <h1>Hi there,</h1>
        <p className="introText">I'm Anson, blah blah blah</p>
      </div>
    </>
  );
}

export default App;
