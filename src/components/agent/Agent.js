import React, { useState } from "react";
import { ReactComponent as MitraBusiness } from "./assets/images/mitra-business.svg";
import { ReactComponent as MitraSpace } from "./assets/images/mitra-space.svg";
import { ReactComponent as MitraPoolWarehouse } from "./assets/images/mitra-pool-warehouse.svg";
import { mbData } from "./data/mitra-business";
import { msData } from "./data/mitra-space";
import { mpwData } from "./data/mitra-pool-warehouse";

const mitra = [
  {
    name: "Mitra Business",
    value: "mb",
  },
  {
    name: "Mitra Space",
    value: "ms",
  },
  {
    name: "Mitra Pool Warehouse",
    value: "mpw",
  },
];
const Agent = () => {
  const [activeButton, setActiveButton] = useState(mitra[0].name);
  const handleClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
  };
  return (
    <div>
      <h1 className="text-center text-3xl m-14 font-bold">Daftar Mitra Kami</h1>
      <div className="grid grid-cols-3 text-center">
        {mitra.map((item) => {
          const className =
            activeButton === item.name
              ? "text-merah font-bold"
              : "text-black hover:text-gray";
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
      <div className="card text-center my-10 md:mx-32 ">
        <p className="font-bold pt-14">{activeButton}</p>
        {activeButton === "Mitra Business" && (
          <div className="p-14">
            <MitraBusiness className="mx-auto mt-14" />
            <p className="mt-14">
              Jenis Mitra Trawlbens yang dapat melayani pengiriman barang di
              atas 100 kg. Dilengkapi dengan peralatan penunjang operasional
              yang canggih dan staf yang prosesional.
            </p>
            <hr className="m-8" />
            <div className="text-center">
              {mbData.map((data, key) => {
                return (
                  <div className="grid grid-rows-1 gap-2" key={key}>
                    <h1 className="font-bold mt-4">{data.code}</h1>
                    <h1>+62{data.nohp + " " + data.name}</h1>
                    <h1> {data.alamat}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {activeButton === "Mitra Space" && (
          <div className="p-14">
            <MitraSpace className="mx-auto mt-14" />
            <p className="mt-14">
              Jenis Mitra Trawlbens yang khusus melayani pengiriman barang
              minimal 10kg/pcs. Dilengkapi dengan peralatan penunjang
              operasional yang canggih dan juga staf yang berpengalaman di
              bidangnya.
            </p>
            <hr className="m-8" />
            <div className="text-center">
              {msData.map((data, key) => {
                return (
                  <div className="grid grid-rows-1 gap-2" key={key}>
                    <h1 className="font-bold mt-4">{data.code}</h1>
                    <h1>+62{data.nohp + " " + data.name}</h1>
                    <h1> {data.alamat}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {activeButton === "Mitra Pool Warehouse" && (
          <div className="p-14">
            <MitraPoolWarehouse className="mx-auto mt-14" />
            <hr className="m-8" />
            <div className="text-center">
              {mpwData.map((data, key) => {
                return (
                  <div className="grid grid-rows-1 gap-2" key={key}>
                    <h1 className="font-bold mt-4">{data.code}</h1>
                    <h1>+62{data.nohp + " " + data.name}</h1>
                    <h1> {data.alamat}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agent;
