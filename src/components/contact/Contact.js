import React from "react";
import { ReactComponent as Content1 } from "./assets/images/kontak.svg";
import { ReactComponent as Content3 } from "./assets/images/email.svg";
import { ReactComponent as Content4 } from "./assets/images/alamat.svg";
import { ReactComponent as Content2 } from "./assets/images/phone.svg";

const Contact = () => {
  return (
    <div className="wrapper grid grid-rows-1 md:grid-cols-2">
      <div className="grid grid-rows-1">
        <h1 className="font-bold text-3xl">Ingin hubungi kami?</h1>
        <Content1 className="w-11/12 h-full md:9/12" />
      </div>
      <div className="grid grid-rows-3 gap-8">
        <div className="flex flex-rows-2 gap-4">
          <Content2 />
          <div className="">
            <h1 className="font-bold text-3xl">Dukungan Telepon</h1>
            <h1 className="mt-4 text-sm">Head Office : (021) 22908000</h1>
            <h1 className="mt-4 text-sm">
              CS Marketing : 0813.99.000.000 (WA Only)
            </h1>
            <h1 className="mt-4 text-sm">
              Customer Care : 0811.28.9000 (WA Only)
            </h1>
            <h1 className="mt-4 text-sm">
              Customer Service : 0811.908.572 (WA Only)
            </h1>
            <h1 className="mt-4 text-sm">
              Mitra dan Agent : 0812.1085.2607 (WA Only)
            </h1>
          </div>
        </div>
        <div className="flex flex-rows-2 gap-4">
          <Content3 />
          <div className="">
            <h1 className="font-bold text-3xl">Email</h1>
            <h1 className="mt-4 text-sm">
              <span className="font-bold">Info:</span> info@trawlbens.id
            </h1>
            <h1 className="mt-4 text-sm">
              <span className="font-bold">Customer Care: </span>
              care@trawlbens.id
            </h1>
            <h1 className="mt-4 text-sm">Mitra Service: deal@trawlbens.id</h1>
            <h1 className="mt-4 text-sm">Sales: sales@trawlbens.id</h1>
            <h1 className="mt-4 text-sm">
              Mitra dan Agent: halim@trawlbens.id
            </h1>
          </div>
        </div>
        <div className="flex flex-rows-2 gap-4">
          <Content4 />
          <div className="">
            <h1 className="font-bold text-3xl">Alamat</h1>
            <h1 className="mt-4 text-sm">
              <h1 className="font-bold text-base">Head Office</h1>
              <p>
                Jl. Rasamala Raya No.35, RT.7/RW.9, Menteng Dalam, Kec. Tebet,
                Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870
              </p>
            </h1>
            <h1 className="mt-4 text-sm">
              <h1 className="font-bold text-base">Training Centre</h1>
              <p>
                Jl. Cempaka Putih Tengah XVI No.7, RT.2/RW.8, Cemp. Putih Tim.,
                Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota
                Jakarta 10510
              </p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
