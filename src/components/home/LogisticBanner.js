import React from "react";
import { ReactComponent as Icon1 } from "./assets/icon/Icon1.svg";
import { ReactComponent as Icon2 } from "./assets/icon/Icon2.svg";
import { ReactComponent as Icon3 } from "./assets/icon/Icon3.svg";
import { ReactComponent as Icon4 } from "./assets/icon/Icon4.svg";
import { ReactComponent as Icon5 } from "./assets/icon/Icon5.svg";

const LogisticBanner = () => {
  return (
    <div>
      <h1 className="text-center text-xl wrapper">
        Logistik atau Kargo apa saja yang bisa dikirim oleh Trawlbens?
      </h1>
      <div className="grid grid-rows-1 justify-center gap-4 wrapper md:grid-cols-3">
        <div className="grid grid-rows-1 md:flex">
          <Icon1 />
          <div className="mt-10">
            <h1 className="text-2xl text-merah">Paket Kecil</h1>
            <p>Paket kecil dari Online-Shop atau UKM Kecil</p>
          </div>
        </div>
        <div className="grid grid-rows-1 justify-center md:flex">
          <Icon2 />
          <div className="mt-10">
            <h1 className="text-2xl text-merah">Barang Pindahan</h1>
            <p>Barang-barang pindahan</p>
          </div>
        </div>
        <div className="grid grid-rows-1 justify-center md:flex">
          <Icon3 />
          <div className="mt-10">
            <h1 className="text-2xl text-merah">Produk Industri</h1>
            <p>Barang-barang produk industri</p>
          </div>
        </div>
        <div className="grid grid-rows-1 justify-center md:flex">
          <Icon4 />
          <div className="mt-10">
            <h1 className="text-2xl text-merah">Elektronik</h1>
            <p>Mesin, Sparepart, Elektronik, dan Garment</p>
          </div>
        </div>
        <div className="grid grid-rows-1 justify-center md:grid-cols-2">
          <Icon5 />
          <div className="mt-10">
            <h1 className="text-2xl text-merah">Kargo Besar</h1>
            <p>Kargo barang besar dengan Tonase di atas 1 ton</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticBanner;
