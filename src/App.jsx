import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import Herosection from "./components/Herosection"
import About from "./components/About"

function App() {
  return (
    <>
      <div className="bg-[#2a3342]">
        <Header></Header>
        <Herosection />
      </div>

      <About />
      <Footer></Footer>
    </>
  );
}

export default App;
