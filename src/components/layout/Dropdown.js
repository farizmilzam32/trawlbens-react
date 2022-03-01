import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen ? "grid grid-rows-4 text-center items-center bg-putih" : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4" to="/mitra">
        Kemitraan
      </Link>
      <Link className="p-4" to="/agen">
        Alamat Agen
      </Link>
      <Link className="p-4" to="/karir">
        Karir
      </Link>
      <Link className="p-4" to="/contact">
        Kontak Kami
      </Link>
    </div>
  );
};

export default Dropdown;
