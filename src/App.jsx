import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import Herosection from "./components/Herosection"
import About from "./components/About"

function App() {
  return (
    <>
      <Header></Header>
      <Herosection/>
      <About/>
      <Footer></Footer>
    </>
  );
}

export default App;
