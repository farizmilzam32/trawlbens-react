import React from "react";

const Navbar = () => {
  return (
    <div className="position-fixed position-fixed-mobile bg-putih">
      <div className="container mx-auto flex justify-between container-flex item">
        <img
          src="https://media.graphcms.com/ttnwBIGzS5CwJca2PH1S"
          alt="logo-trawlpack"
          className="w-4/12 md:w-2/12 h-full m-2 pt-3"
        />
        <img
          src="https://media.graphcms.com/fnWmwAowSkOyBbu3dSv9"
          alt="logo-spesialis"
          className="w-10/12 md:w-6/12 h-full p-8 md:p-4"
        />
        <a href="https://wa.me/6281399000000">
          <button className="border-solid border-2 mt-5 rounded-lg py-2 px-4 bg-[#253E25] text-putih font-bold text-sm">
            Chat Sekarang
          </button>
        </a>
      </div>
      <div className="fixed-right">
        <a href="https://wa.me/6281399000000">
          <button className="bg-hijau text-putih py-2 px-14 rounded-full mb-4 mr-2 text-lg font-bold">
            <div className="flex gap-4">
              <img
                src="https://img.icons8.com/material-outlined/36/ffffff/whatsapp--v1.png"
                alt="whatsapp"
                className="h-2/6 pt-2"
              />
              <div>
                <p>Marketing & Sales</p>
                <p>0813 99 000 000</p>
              </div>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
