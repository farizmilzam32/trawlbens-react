import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray">
      <div className="container mx-auto ml-4 md:px-20">
        <div className="grid grid-rows-1 md:grid-cols-4 gap-6">
          <div>
            <img
              src="https://media.graphcms.com/L8gtOZORTmwF075GJW0W"
              alt="logo trawlbens"
              className="w-52"
            />
            <div className="mt-6">
              <h1>PT Trawlbens Teknologi Anak Indonesia</h1>
              <h1>
                Jl. Rasamala Raya No.35, RT.7/RW.9, Menteng Dalam, Kec. Tebet,
                Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870
                <div className="flex">
                  <div className="col-span-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  (021)22908000
                </div>
              </h1>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Hubungi</h1>
            <div className="grid grid-rows-1 gap-4 mt-8 mr-8 md:grid-cols-2">
              <div>
                <p>Customer Services</p>
                <p>0811908572</p>
                <p>deal@trawlbens.id</p>
              </div>
              <div className="">
                <p>Marketing</p>
                <p>081399000000</p>
                <p>sales@trawlbens.id</p>
              </div>
              <div>
                <p>Customer Care</p>
                <p>0811289000</p>
                <p>care@trawlbens.id</p>
              </div>
              <div>
                <p>Mitra dan Agent</p>
                <p>081210852607</p>
                <p>halim@trawlbens.id</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Layanan</h1>
            <div className="grid grid-cols-2 gap-2 mt-8">
              <h1>TrawlPack</h1>
              <h1>TrawlMover</h1>
              <h1>TrawlCarrier</h1>
              <h1>TrawlHeavy</h1>
              <h1>TrawlFeet</h1>
              <h1>TrawlTruck</h1>
              <h1>TrawlBoat</h1>
              <h1>TrawlExim</h1>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Bantuan</h1>
            <div className="mt-8">
              <h1>Kontak Kami</h1>
              <h1>FAQ</h1>
              <h1>Kebijakan Privasi</h1>
              <h1>Kebijakan Privasi Aplikasi</h1>
              <h1>Syarat dan Ketentuan</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
