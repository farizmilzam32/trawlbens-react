import React from "react";

const Banner = () => {
  return (
    <div className="background-banner">
      <div className="wrapper">
        <div className="text-justify">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* <h1 className="text-2xl text-center">Download Aplikasi Kami</h1> */}
            <img
              className="w-12/12 md:w-9/12"
              src="https://media.graphcms.com/X9ho5O2R76vbd1MxJWXw"
              alt="handphone banner"
            />
            <div className="py-0 md:py-32">
              <h1 className="text-3xl font-bold">
                Download aplikasi sekarang!
              </h1>
              <h1 className="text-xl  ">
                Jadwalkan pengirimanmu dan jelajahi seluruh Indonesia bersama
                Trawlbens!
              </h1>
              <img
                src="https://media.graphcms.com/QmYLMdy6RCS5a0EFI5JL"
                alt="logo-playstore"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
