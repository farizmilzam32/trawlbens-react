import React from "react";
const Corporate = () => {
  return (
    <div className="bg-gray">
      <div className="text-center wrapper">
        <h1 className="text-center text-3xl pt-20">
          Apakah Corporate bisa berlangganan?
        </h1>
        <p className="md:mx-96 pt-16 ">
          <span className="text-merah font-bold">Tentu Bisa</span> dan dapatkan
          keunggulan dengan sistem pembayaran T.O.P, sistem ini menghadirkan
          metode pembayaran berjangka yang dapat dinikmati hanya oleh pelanggan
          dengan akun Bisnis, dimana Anda dapat melakukan pembayaran setelah
          barang diterima dengan jangka waktu pembayaran mulai dari 14 hari
          sejak tanggal diterbitkannya invoice. Untuk lebih lanjut, silahkan
          hubungi kami pada tombol dibawah ini:
        </p>
        <div className="md:flex justify-center mt-5">
          <a href="https://wa.me/6281399000000">
            <button className="bg-hijau text-putih py-2 px-5 rounded-full mb-4 mr-2 text-lg font-bold">
              <div className="flex gap-2">
                <img
                  src="https://img.icons8.com/material-outlined/36/ffffff/whatsapp--v1.png"
                  alt="whatsapp"
                />
                Whatsapp
              </div>
            </button>
          </a>
          <a href="tel:+62811908572">
            <button className="bg-putih text-black py-3 px-4 rounded-full mb-4 mr-2 text-lg font-bold ">
              <div className="flex gap-2">
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
                Telephone
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
