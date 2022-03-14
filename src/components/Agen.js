import React, { useState, useEffect } from "react";
import Agent from "./agent/Agent";
import Dropdown from "./layout/Dropdown";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

const Agen = () => {
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
      <Agent />
      <Footer />
    </div>
  );
};

export default Agen;
