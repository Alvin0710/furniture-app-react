import React, { useEffect } from "react"
import AboutUs from "./components/AboutUs";
import Client from "./components/Client";
import Footer from "./components/Footer";
import HeroPage from "./components/HeroPage";
import HotDeals from "./components/HotDeals";
import Navbar from "./components/Navbar"
import Products from "./components/Products";
import TrustedBy from "./components/TrustedBy";

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <HeroPage/>
      <TrustedBy/>
      <HotDeals/>
      <AboutUs/>
      <Products/>
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;
