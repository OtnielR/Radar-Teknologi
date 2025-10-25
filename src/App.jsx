import Herosection from "./components/Herosection";
import About from "./components/About";
import Service from "./components/Service";
import Persuasi from "./components/Persuasi";
import Contact from "./components/Contact";
import Client from "./components/Client";
import Header from "./components/header";
import Footer from "./components/Footer";
import Visi from "./components/Visi";


function App() {
  return (
    <>

    <div className="bg-[#2a3342]">

      <Header></Header>
      <Herosection/>
    </div>
      <About/>
      <Visi/>
      <Service/>
      <Client/>
      <Persuasi/>
      <Contact/>
      <Footer/>
    

    </>
  );
}

export default App;
