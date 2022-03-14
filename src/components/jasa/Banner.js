import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl m-12">Kenapa Trawlpack</h1>
      <div className="grid md:grid-cols-2">
        <img src="https://media.graphcms.com/c6ayX8ZQbydm2SQmHVoX" alt="" />
        <div className="grid grid-rows-3 m-8">
          <div className="">
            <h1 className="font-bold">Kirim Barang Mulai Dari 10 kg</h1>
            <p>
              Trawlpack melayani pengiriman barang mulai dari 10 kg ke atas
              hingga 100 ton
            </p>
          </div>
          <div>
            <h1 className="font-bold">Pasti Sampai ke Ujung Indonesia</h1>
            <p>Jangkauan Trawlpack hingga Ujung Timur Indonesia</p>
          </div>
          <div>
            <h1 className="font-bold">Gratis Pick-Up Barang</h1>
            <p>
              Tidak lagi repot, barang dijemput oleh Armada Trawlbens dengan
              cuma-cuma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
