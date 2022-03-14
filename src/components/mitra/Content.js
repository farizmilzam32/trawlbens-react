import React from "react";
import { ReactComponent as Content1 } from "./assets/images/usaha-jangka-panjang.svg";
import { ReactComponent as Content2 } from "./assets/images/penghasilan-besar.svg";
import { ReactComponent as Content3 } from "./assets/images/kemitraan-yang-fleksibel.svg";
import { ReactComponent as Content4 } from "./assets/images/memiliki-tim-profesional.svg";
import { ReactComponent as Content5 } from "./assets/images/mudah-mendapatkan-konsumen.svg";
import { ReactComponent as Content6 } from "./assets/images/menggunakan-teknologi-terbarukan.svg";

const Content = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl mt-10">
        Kenapa Harus Menjadi Mitra Trawlbens?
      </h1>
      <div className="wrapper grid grid-rows-1 md:grid-cols-3 gap-4">
        <div>
          <Content1 />
          <h1 className="font-bold text-xl mt-4">Usaha Jangka Panjang</h1>
          <p className="text-sm mt-4">
            Usaha kargo adalah bidang usaha yang diprediksi akan awet hingga 100
            tahun kedepan, karena setiap bisnis memerlukan kargo untuk
            distribusi produk ataupun bahan baku, dan belum ada teknologi yang
            dapat menggantikannya.
          </p>
        </div>
        <div>
          <Content2 />
          <h1 className="font-bold text-xl mt-4">Penghasilan Besar</h1>
          <p className="text-sm mt-4">
            Karena bisnis kargo selalu menjadi penunjang penting untuk bisnis
            lain, kebutuhan pengiriman barang tentunya akan selalu ada, dan
            tentunya Anda akan berkesempatan mendapatkan penghasilan hingga 30
            juta setiap bulannya.
          </p>
        </div>
        <div>
          <Content3 />
          <h1 className="font-bold text-xl mt-4">Kemitraan Yang Fleksible</h1>
          <p className="text-sm mt-4">
            TrawlBens memiliki 5 jenis kemitraan yang bisa disesuaikan dengan
            keinginan dan kemampuan Anda saat ini.
            <ul className="mt-4 font-bold">
              <li>Mitra Business</li>
              <li>Mitra Space</li>
              <li>Mitra Pool Warehouse</li>
              <li>Mitra Kurir Motor</li>
              <li>Mitra Transporter Mobil</li>
            </ul>
          </p>
        </div>
        <div>
          <Content4 />
          <h1 className="font-bold text-xl mt-4">Memiliki Tim Profesional</h1>
          <p className="text-sm mt-4">
            Ketika Anda bergabung dengan TrawlBens Anda akan dibantu oleh tenaga
            profesional kami yang sudah lama berpengalaman di bidang kargo dan
            logistik, dan juga Anda akan mendapatkan pelatihan tentang jasa
            kargo.
          </p>
        </div>
        <div>
          <Content5 />
          <h1 className="font-bold text-xl mt-4">Mudah Mendapatkan Konsumen</h1>
          <p className="text-sm mt-4">
            TrawlBens Memiliki tarif pengiriman yang murah dan jangkauan
            pengiriman keseluruh Indonesia, sehingga akan menarik minat konsumen
            menggunakan jasa TrawlBens.
          </p>
        </div>
        <div>
          <Content6 />
          <h1 className="font-bold text-xl mt-4">
            Menggunakan Teknologi Terbarukan
          </h1>
          <p className="text-sm mt-4">
            TrawlBens sudah menggunakan Aplikasi dengan sistem teknologi terbaru
            sehingga Anda sebagai mitra dan konsumen akan mudah memahami cara
            penggunaan Aplikasi TrawlBens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
