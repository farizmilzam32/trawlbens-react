import React from "react";

const CustomerReview = () => {
  return (
    <div>
      <h1 className="text-center text-3xl">Apa yang customer kami katakan</h1>
      <div className="grid grid-rows-1 gap-4 wrapper md:grid-cols-3">
        <div className="border-customer p-6">
          <div className="flex mb-2">
            <img
              src="https://media.graphcms.com/WJrGZ27tQcGbEySFbAbj"
              alt="customer-review"
              className="w-12 h-12 mr-3"
            />
            <div>
              <p className="font-bold">Alya Endah Fajriati</p>
              <p className="text-lightgrey text-xs">
                Review on Google My Business
              </p>
            </div>
          </div>
          <p>
            Dapat tentang jasa pengiriman ini dari Google. Awalnya saya ingin
            memakai jasa lain namun admin nya lama balas, jadi lah saya
            menggunakan TrawlBens. Customer service nya ngelayanin sabar banget,
            dan pastinya cepat juga ngerespon.
          </p>
        </div>
        <div className="border-customer p-6">
          <div className="flex mb-2">
            <img
              src="https://media.graphcms.com/5cj6V8zBQMmhjzJ9NnL4"
              alt="customer-review"
              className="w-12 h-12 mr-3"
            />
            <div>
              <p className="font-bold">Fikar Fathurachmat</p>
              <p className="text-lightgrey text-xs">
                Review on Google My Business
              </p>
            </div>
          </div>
          <p>
            Sangat membantu dagangan saya pada bulan puasa ini, semakin banyak
            saya kirim malah semakin murah ongkirnya.
          </p>
        </div>
        <div className="border-customer p-6">
          <div className="flex mb-2">
            <img
              src="https://media.graphcms.com/YnR746T7R5yqBuUUCkSu"
              alt="customer-review"
              className="w-12 h-12 mr-3"
            />
            <div>
              <p className="font-bold">Bunga Djayanegara</p>
              <p className="text-lightgrey text-xs">
                Review on Google My Business
              </p>
            </div>
          </div>
          <p>
            Ekspedisi masa kini untuk kaum rebahan , tinggal pake aplikasi paket
            di jemput kerumah gratis udah gitu murah lagi 😁 Thank you
            Trawlbens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
