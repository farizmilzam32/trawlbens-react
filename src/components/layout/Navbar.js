import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav className="flex justify-between item-center h-16 bg-white text-black relative shadow-sm fixed top-0">
      <Link to="/" className="pl-8 md:pt-2">
        <img
          src="https://media.graphcms.com/7vLESI8RfmdZY31yYjqw"
          alt="logo trawlbens"
          className="w-52"
        />
      </Link>
      <div className="p-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 pt-6 md:block hidden text-base">
        <Link className="p-4 text-base" to="/mitra">
          Kemitraan
        </Link>
        <Link className="p-4 text-base" to="/agen">
          Alamat Agen
        </Link>
        <Link className="p-4 text-base" to="/karir">
          Karir
        </Link>
        <Link className="p-4 text-base" to="/contact">
          Kontak Kami
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
