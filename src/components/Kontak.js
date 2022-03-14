import React, { useState, useEffect } from "react";
import Contact from "./contact/Contact";
import Dropdown from "./layout/Dropdown";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

const Kontak = () => {
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
      <Contact />
      <Footer />
    </div>
  );
};

export default Kontak;
