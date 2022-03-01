import React, { useState } from "react";
const checks = [
  {
    name: "Cek Tarif",
    value: "cektarif",
  },
  {
    name: "Lacak Barang",
    value: "lacakbarang",
  },
];

const Calculate = () => {
  const [activeButton, setActiveButton] = useState(checks[0].name);
  const handleClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
  };
  return (
    <div className="md:wrapper mx-8 my-4">
      <div className="card p-8">
        <div className="flex">
          {checks.map((item) => {
            const className =
              activeButton === item.name
                ? "bg-hijau text-putih py-2 px-4 rounded-full mb-4 mr-2 text-lg font-bold text-[15px] md:text-sm"
                : "bg-putih text-black py-2 px-4 rounded-full mb-4 mr-2 text-lg font-bold text-[15px] md:text-sm";
            return (
              <div key={item.value}>
                <button
                  className={`${className}`}
                  name={item.name}
                  value={item.value}
                  onClick={handleClick}
                >
                  {item.name}
                </button>
              </div>
            );
          })}
        </div>
        {activeButton === "Cek Tarif" && (
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <label htmlFor="kotaAsal" className="font-bold">
                  Kota Asal Pengiriman
                </label>
                <select
                  className="w-11/12 border-style"
                  id="kotaAsal"
                  type="text"
                  placeholder="Masukkan kota asal"
                />
              </div>
              <div>
                <label htmlFor="kotaTujuan" className="font-bold">
                  Kota Tujuan Pengiriman
                </label>
                <select
                  className="w-11/12 border-style"
                  id="kotaTujuan"
                  type="text"
                />
              </div>
            </div>
            <div className="pb-6">
              <input id="berat" type="checkbox" className="mr-1"></input>
              <label htmlFor="berat" className="mr-2">
                Weigth
              </label>
              <input id="berat" type="checkbox" className="mr-1"></input>
              <label htmlFor="berat">Volume</label>
            </div>
          </form>
        )}
        {activeButton === "Lacak Barang" && (
          <form>
            <div className="grid grid-rows-1">
              <label className="font-bold">Resi</label>
              <input
                className="w-10/12 border-style"
                id="resi"
                type="text"
                placeholder="Masukkan Resi"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Calculate;
