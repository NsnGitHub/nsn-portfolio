import "../styles/App.css";
import Hero from "./Hero";
import LiquidBackgroundV2 from "./LiquidBackground-v2";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <LiquidBackgroundV2 />
      <Navbar />
      <Hero />
      <div style={{ height: "100vh" }}></div>
    </>
  );
}

export default App;
