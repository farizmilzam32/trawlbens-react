import React, { useState, useEffect } from "react";
import Banner from "./components/home/Banner";
import Blog from "./components/home/Blog";
import Calculate from "./components/home/CheckPrice";
import Corporate from "./components/home/Corporate";
import CustomerReview from "./components/home/CustomerReview";
import Hero from "./components/home/Hero";
import HowTo from "./components/home/HowTo";
import LogisticBanner from "./components/home/LogisticBanner";
import Media from "./components/home/Media";
import MyCarousel from "./components/home/MyCarousel";
import Dropdown from "./components/layout/Dropdown";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Calculate />
      <HowTo />
      <Banner />
      <LogisticBanner />
      <CustomerReview />
      <Corporate />
      <Blog />
      <MyCarousel />
      <Media />
      <Footer />
    </div>
  );
}

export default App;
