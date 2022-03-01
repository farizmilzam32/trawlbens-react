import React from "react";
import { ReactComponent as Mitra1 } from "./assets/images/mitra-business.svg";
import { ReactComponent as Mitra2 } from "./assets/images/mitra-space.svg";
import { ReactComponent as Mitra3 } from "./assets/images/mitra-pool-warehouse.svg";
import { ReactComponent as Mitra4 } from "./assets/images/mitra-transporter-mobil.svg";
import { ReactComponent as Mitra5 } from "./assets/images/mitra-kurir-motor.svg";

const Mitra = () => {
  return (
    <div className="wrapper">
      <h1 className="text-center text-3xl">
        Bagaimana Caranya Menjadi Mitra TrawlBens?
      </h1>
      <div className="grid grid-rows-1 md:grid-cols-3 gap-10 mt-14">
        <div>
          <h1 className="ml-24 mb-4 font-bold text-xl">Mitra Business</h1>
          <Mitra1 />
          <p className="mt-4">
            Raih keuntungan yang lebih besar lagi dengan menjadi mitra business
            kami sepenuhnya. Anda hanya perlu menyiapkan tempat dan kendaraan.
          </p>
          <button className="mt-4 rounded-full bg-hijau p-2 text-putih">
            Daftar Sekarang
          </button>
        </div>
        <div>
          <h1 className="ml-24 mb-4 font-bold text-xl">Mitra Space</h1>
          <Mitra2 />
          <p className="mt-4">
            Hanya dengan menyediakan tempat minimal berukuran 3x4 m2
            (rumah/kios), Anda bisa mendapatkan penghasilan yang fantastis
            setiap bulannya.
          </p>
          <button className="mt-4 rounded-full bg-hijau p-2 text-putih">
            Daftar Sekarang
          </button>
        </div>
        <div>
          <h1 className="ml-24 mb-4 font-bold text-xl">Mitra Pool Warehouse</h1>
          <Mitra3 />
          <p className="mt-4">
            Dengan lahan minimal 1000 m2 dan sumber daya lainnya, Anda bisa
            berkesempatan mendapatkan keuntungan sebesar-besarnya dan bertumbuh
            bersama kami.
          </p>
          <button className="mt-4 rounded-full bg-hijau p-2 text-putih">
            Daftar Sekarang
          </button>
        </div>
        <div>
          <h1 className="ml-24 mb-4 font-bold text-xl">
            Mitra Transporter Mobil
          </h1>
          <Mitra4 />
          <p className="mt-4">
            Manfaatkan kendaraan yang Anda miliki seperti VAN, pick-up bak/box,
            engkel bak/box, double engkel, fuso, tronton box, wingbox dan
            lainnya untuk mendapatkan penghasilan fantastis setiap bulannya.
          </p>
          <button className="mt-4 rounded-full bg-hijau p-2 text-putih">
            Daftar Sekarang
          </button>
        </div>
        <div>
          <h1 className="ml-24 mb-4 font-bold text-xl">Mitra Kurir Motor</h1>
          <Mitra5 />
          <p className="mt-4">
            Hanya dengan antar jemput barang kiriman, Anda bisa mendapatkan
            penghasilan jutaan rupiah setiap bulannya.
          </p>
          <div>
            <button className="mt-4 rounded-full bg-hijau p-2 text-putih group-hover:text-black">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mitra;
