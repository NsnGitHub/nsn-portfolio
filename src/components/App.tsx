import "../styles/App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div style={{ height: "100vh" }}>Hello</div>
    </>
  );
}

export default App;
