import React from "react";

const Mobile = () => {
  return (
    <div className="grid grid-rows-2md:grid-cols-2">
      <div className="grid grid-rows-1">
        <img
          src="https://media.graphcms.com/ttnwBIGzS5CwJca2PH1S"
          alt=""
          className="w-2/12 h-2/6 m-2 pt-3"
        />
        <img
          src="https://media.graphcms.com/fnWmwAowSkOyBbu3dSv9"
          alt=""
          className="w-6/12 h-3/12 p-4"
        />
      </div>
      <button className="border-solid border-2 m-4 rounded-lg py-2 px-4 bg-[#253E25] text-putih font-bold text-sm">
        Chat Sekarang
      </button>
    </div>
  );
};

export default Mobile;
