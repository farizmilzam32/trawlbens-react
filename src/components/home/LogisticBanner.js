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
      <div className="grid grid-rows-1 justify-center gap-4 wrapper md:grid-cols-5">
        <div className="grid grid-rows-1 md:flex">
          <Icon1 className="w-11/12" />
          <div className="mt-10">
            <h1 className="text-2xl text-merah">Paket Kecil</h1>
            <p>Paket kecil dari Online-Shop atau UKM Kecil</p>
          </div>
        </div>
        <div className="grid grid-rows-1 justify-center md:flex">
          <Icon2 className="w-11/12" />
          <div className="mt-10">
            <h1 className="text-2xl text-merah">Barang Pindahan</h1>
            <p>Barang-barang pindahan</p>
            <div class="fixed-right">
              <a href="https://wa.me/6281399000000">
                <button className="bg-hijau text-putih py-2 px-2 rounded-full mb-4 mr-8 text-sm font-bold md:text-lg md:py-2 md:px-12 md:mr-2">
                  <div className="flex gap-2">
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
            <div class="fixed-left">
              <a href="https://wa.me/62811289000">
                <button className="bg-hijau text-putih py-2 px-2 rounded-full mb-4 mr-6 text-sm font-bold  md:text-lg md:py-2 md:px-12 ">
                  <div className="flex gap-2">
                    <img
                      src="https://img.icons8.com/material-outlined/36/ffffff/whatsapp--v1.png"
                      alt="whatsapp"
                      className="h-2/6 pt-2"
                    />
                    <div>
                      <p>Customer Care</p>
                      <p>0811 28 9000</p>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-1 justify-center md:flex">
          <Icon3 className="w-11/12" />
          <div className="mt-10">
            <h1 className="text-2xl text-merah">Produk Industri</h1>
            <p>Barang-barang produk industri</p>
          </div>
        </div>
        <div className="grid grid-rows-1 justify-center md:flex">
          <Icon4 className="w-11/12" />
          <div className="mt-10">
            <h1 className="text-2xl text-merah">Elektronik</h1>
            <p>Mesin, Sparepart, Elektronik, dan Garment</p>
          </div>
        </div>
        <div className="grid grid-rows-1 justify-center md:grid-cols-2">
          <Icon5 className="w-11/12" />
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
