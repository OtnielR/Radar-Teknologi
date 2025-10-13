import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Service from "./components/Service";
import Persuasi from "./components/Persuasi";
import Contact from "./components/Contact";
import Client from "./components/Client";

function App() {
  return (
    <>

    <div className="bg-[#2a3342]">

      <Header></Header>
      <Herosection/>
    </div>
      <About/>
      <Service/>
      <Client/>
      <Persuasi/>
      <Contact/>
      <Footer/>
    

    </>
  );
}

export default App;
